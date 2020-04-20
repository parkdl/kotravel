import axios from "axios";
import { api } from "../api";
import { pagination } from "../middleWare";
import { detailCommon, detailImage, detailIntro, detailInfo } from "../assets/detail/detailData";
import { korType, categoryName, areaName, areaCode, searchResult } from "../assets/Variable";

export const getHome = (req, res) => {
  const areaArray = areaName.kor;
  const categoryArray = categoryName.kor;

  return res.send({ areaCode, korType, areaArray, categoryArray });
};

export const getBaseList = async (req, res) => {
  const pathname = req._parsedUrl.pathname;
  const page = parseInt(req.query.page);
  const area = parseInt(req.query.area) || null;

  for (var i = 0; i < korType.path.length; i++) {
    if (pathname.includes(korType.path[i])) {
      await api
        .get("areaBasedList", {
          params: {
            contentTypeId: korType.typeNum[i],
            arrange: "P",
            areaCode: area,
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

          const lang = "/kor";
          const addedAreaCode = area;
          const title = categoryName.kor[i];
          const areaArray = areaName.kor;
          const categoryArray = categoryName.kor;
          const typeArray = korType;
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

export const getAreaDatas = async (req, res) => {
  const area = parseInt(req.query.area);
  const page = parseInt(req.query.page);
  const type = parseInt(req.query.type) || null;

  for (var i = 0; i < areaCode.length; i++) {
    if (area === areaCode[i]) {
      await api
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

          const lang = "/kor";
          const addedAreaCode = area;
          const title = areaName.kor[i];
          const areaArray = areaName.kor;
          const categoryArray = categoryName.kor;
          const typeArray = korType;
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

export const getDetailAll = (req, res) => {
  const pathname = req._parsedUrl.pathname;

  for (var i = 0; i < korType.path.length; i++) {
    const path = korType.path[i];
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

            const lang = "/kor";
            const typePath = path;
            const areaArray = areaName.kor;
            const categoryArray = categoryName.kor;
            const typeArray = korType;
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
    await api
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

        const lang = "/kor";
        const title = searchResult.kor;
        const areaValue = area;
        const typeCode = type;
        const areaArray = areaName.kor;
        const categoryArray = categoryName.kor;
        const typeArray = korType;

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

    const lang = "/kor";
    const title = searchResult.kor;
    const areaValue = area;
    const typeCode = type;
    const areaArray = areaName.kor;
    const categoryArray = categoryName.kor;
    const typeArray = korType;

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
