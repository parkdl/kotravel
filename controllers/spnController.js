import axios from "axios";
import { spnApi } from "../api";
import { pagination } from "../middleWare";
import { detailCommon, detailImage, detailIntro, detailInfo } from "../assets/detail/spnDetailData";
import { mulType, categoryName, areaName, areaCode, searchResult } from "../assets/Variable";

export const getHome = (req, res) => {
  const areaArray = areaName.spn;
  const categoryArray = categoryName.spn;

  return res.send({ areaCode, mulType, areaArray, categoryArray });
};

export const getSpnList = async (req, res) => {
  const pathname = req._parsedUrl.pathname;
  const page = parseInt(req.query.page);
  const area = parseInt(req.query.area) || null;

  for (var i = 0; i < mulType.path.length; i++) {
    if (pathname.includes(mulType.path[i])) {
      await spnApi
        .get("areaBasedList", {
          params: {
            contentTypeId: mulType.typeNum[i],
            arrange: "P",
            pageNo: page,
            areaCode: area,
            numOfRows: 12,
          },
        })
        .then((response) => {
          const spnBase = response.data.response.body.items.item;
          const totalCount = response.data.response.body.totalCount;
          const pageSize = response.data.response.body.numOfRows;
          const pager = pagination(totalCount, page, pageSize);
          const pageOfItems = spnBase.slice(0, 12);

          const lang = "/spn";
          const addedAreaCode = area;
          const title = categoryName.spn[i];
          const areaArray = areaName.spn;
          const categoryArray = categoryName.spn;
          const typeArray = mulType;
          const allItems = {
            lang,
            addedAreaCode,
            title,
            areaArray,
            categoryArray,
            typeArray,
            areaCode,
          };

          return res.send({ pager, pageOfItems, allItems });
        });
    }
  }
};

export const getSpnAreaDatas = async (req, res) => {
  const area = parseInt(req.query.area);
  const page = parseInt(req.query.page);
  const type = parseInt(req.query.type) || null;

  for (var i = 0; i < areaCode.length; i++) {
    if (area === areaCode[i]) {
      await spnApi
        .get("areaBasedList", {
          params: {
            contentTypeId: type,
            areaCode: area,
            arrange: "P",
            pageNo: page,
            numOfRows: 12,
          },
        })
        .then((response) => {
          const baseList = response.data.response.body.items.item;
          const totalCount = response.data.response.body.totalCount;
          const pageSize = response.data.response.body.numOfRows;
          const pager = pagination(totalCount, page, pageSize);
          const pageOfItems = baseList.slice(0, 12);

          const lang = "/spn";
          const addedAreaCode = area;
          const title = areaName.spn[i];
          const areaArray = areaName.spn;
          const categoryArray = categoryName.spn;
          const typeArray = mulType;
          const allItems = {
            lang,
            addedAreaCode,
            title,
            areaArray,
            categoryArray,
            areaCode,
            typeArray,
          };

          return res.send({ pager, pageOfItems, allItems });
        });
    }
  }
};

export const getSpnDetailAll = (req, res) => {
  const pathname = req._parsedUrl.pathname;

  for (var i = 0; i < mulType.path.length; i++) {
    const path = mulType.path[i];
    if (pathname.includes(path)) {
      axios
        .all([
          detailCommon(req, res),
          detailImage(req, res),
          detailInfo(req, res),
          detailIntro(req, res),
        ])
        .then(
          axios.spread((commonRes, imageRes, infoRes, introRes) => {
            const common = commonRes.data.response.body.items.item;
            const image = imageRes.data.response.body.items.item;
            const info = infoRes.data.response.body.items.item;
            const intro = introRes.data.response.body.items.item;

            const lang = "/spn";
            const typePath = path;
            const areaArray = areaName.spn;
            const categoryArray = categoryName.spn;
            const typeArray = mulType;
            const weather = areaName.weatherArea;
            const allItems = {
              lang,
              typePath,
              areaArray,
              categoryArray,
              typeArray,
              areaCode,
              weather,
            };

            return res.send({ common, image, info, intro, allItems });
          })
        );
    }
  }
};

export const getSearchData = async (req, res) => {
  const keyword = req.query.keyword;
  const page = parseInt(req.query.page);
  const area = parseInt(req.query.area) || null;
  const type = parseInt(req.query.type) || null;

  try {
    await spnApi
      .get("searchKeyword", {
        params: {
          keyword: keyword,
          pageNo: page,
          numOfRows: 12,
          arrange: "P",
          areaCode: area,
          contentTypeId: type,
        },
      })
      .then((response) => {
        const searchData = response.data.response.body.items.item;
        const totalCount = response.data.response.body.totalCount;
        const pageSize = response.data.response.body.numOfRows;
        const pager = pagination(totalCount, page, pageSize);
        const pageOfItems = searchData.slice(0, 12);

        const lang = "/spn";
        const title = searchResult.spn;
        const areaValue = area;
        const typeCode = type;
        const areaArray = areaName.spn;
        const categoryArray = categoryName.spn;
        const typeArray = mulType;

        const allItems = {
          lang,
          title,
          typeCode,
          areaArray,
          categoryArray,
          typeArray,
          areaCode,
          areaValue,
        };

        return res.send({ pageOfItems, pager, allItems });
      });
  } catch (e) {
    const pager = { current: 1 };

    const lang = "/spn";
    const title = searchResult.spn;
    const areaValue = area;
    const typeCode = type;
    const areaArray = areaName.spn;
    const categoryArray = categoryName.spn;
    const typeArray = mulType;

    const allItems = {
      lang,
      title,
      typeCode,
      areaArray,
      categoryArray,
      typeArray,
      areaCode,
      areaValue,
    };

    return res.send({ pager, allItems });
  }
};
