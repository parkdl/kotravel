import axios from "axios";
import { freApi } from "../api";
import { pagination } from "../middleWare";
import { detailCommon, detailImage, detailIntro, detailInfo } from "../assets/detail/freDetailData";
import { mulType, categoryName, areaName, areaCode, searchResult } from "../assets/Variable";

export const getHome = (req, res) => {
  const areaArray = areaName.fre;
  const categoryArray = categoryName.fre;

  return res.send({ areaCode, mulType, areaArray, categoryArray });
};

export const getFreList = async (req, res) => {
  const pathname = req._parsedUrl.pathname;
  const page = parseInt(req.query.page);
  const area = parseInt(req.query.area) || null;

  for (var i = 0; i < mulType.path.length; i++) {
    if (pathname.includes(mulType.path[i])) {
      await freApi
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
          const freBase = response.data.response.body.items.item;
          const totalCount = response.data.response.body.totalCount;
          const pageSize = response.data.response.body.numOfRows;
          const pager = pagination(totalCount, page, pageSize);
          const pageOfItems = freBase.slice(0, 12);

          const lang = "/fre";
          const addedAreaCode = area;
          const title = categoryName.fre[i];
          const areaArray = areaName.fre;
          const categoryArray = categoryName.fre;
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

export const getFreAreaDatas = async (req, res) => {
  const area = parseInt(req.query.area);
  const page = parseInt(req.query.page);
  const type = parseInt(req.query.type) || null;

  for (var i = 0; i < areaCode.length; i++) {
    if (area === areaCode[i]) {
      await freApi
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

          const lang = "/fre";
          const addedAreaCode = area;
          const title = areaName.fre[i];
          const areaArray = areaName.fre;
          const categoryArray = categoryName.fre;
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

export const getFreDetailAll = (req, res) => {
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

            const lang = "/fre";
            const typePath = path;
            const areaArray = areaName.fre;
            const categoryArray = categoryName.fre;
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
    await freApi
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

        const lang = "/fre";
        const title = searchResult.fre;
        const areaValue = area;
        const typeCode = type;
        const areaArray = areaName.fre;
        const categoryArray = categoryName.fre;
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

    const lang = "/fre";
    const title = searchResult.fre;
    const areaValue = area;
    const typeCode = type;
    const areaArray = areaName.fre;
    const categoryArray = categoryName.fre;
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
