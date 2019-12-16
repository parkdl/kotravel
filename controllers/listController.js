import { api } from "../api";
import { pagination } from "../middleWare";
import axios from "axios";
import { detailCommon, detailImage, detailIntro, detailInfo } from "../assets/detailData";

export const getTourist = async (req, res) => {
  const page = parseInt(req.query.page);

  await api
    .get("areaBasedList", {
      params: {
        contentTypeId: type,
        arrange: "P",
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const touristList = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = touristList.slice(0, 12);

      return res.send({ pager, pageOfItems });
    });
};

export const getCultural = async (req, res) => {
  const page = parseInt(req.query.page);

  await api
    .get("areaBasedList", {
      params: {
        contentTypeId: 14,
        arrange: "P",
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const culturalList = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = culturalList.slice(0, 12);

      return res.send({ pager, pageOfItems });
    });
};

export const getFestival = async (req, res) => {
  const page = parseInt(req.query.page);

  await api
    .get("areaBasedList", {
      params: {
        contentTypeId: 15,
        arrange: "P",
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const festivalList = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = festivalList.slice(0, 12);

      return res.send({ pager, pageOfItems });
    });
};

export const getFood = async (req, res) => {
  const page = parseInt(req.query.page);

  await api
    .get("areaBasedList", {
      params: {
        contentTypeId: 39,
        arrange: "P",
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const foodList = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = foodList.slice(0, 12);

      return res.send({ pager, pageOfItems });
    });
};

export const getRooms = async (req, res) => {
  const page = parseInt(req.query.page);

  await api
    .get("areaBasedList", {
      params: {
        contentTypeId: 32,
        arrange: "P",
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const roomsList = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = roomsList.slice(0, 12);

      return res.send({ pager, pageOfItems });
    });
};

export const getShopping = async (req, res) => {
  const page = parseInt(req.query.page);

  await api
    .get("areaBasedList", {
      params: {
        contentTypeId: 38,
        arrange: "P",
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const shoppingList = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = shoppingList.slice(0, 12);

      return res.send({ pager, pageOfItems });
    });
};

export const getTravelCourse = async (req, res) => {
  const page = parseInt(req.query.page);

  await api
    .get("areaBasedList", {
      params: {
        contentTypeId: 25,
        arrange: "P",
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const travelCourseList = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = travelCourseList.slice(0, 12);

      return res.send({ pager, pageOfItems });
    });
};

export const getLeisure = async (req, res) => {
  const page = parseInt(req.query.page);

  await api
    .get("areaBasedList", {
      params: {
        contentTypeId: 28,
        arrange: "P",
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const leisureList = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = leisureList.slice(0, 12);

      return res.send({ pager, pageOfItems });
    });
};

export const getDetailAll = (req, res) => {
  axios
    .all([
      detailCommon(req, res),
      detailImage(req, res),
      detailInfo(req, res),
      detailIntro(req, res)
    ])
    .then(
      axios.spread((commonRes, imageRes, infoRes, introRes) => {
        const common = commonRes.data.response.body.items.item;
        const image = imageRes.data.response.body.items.item;
        const info = infoRes.data.response.body.items.item;
        const intro = introRes.data.response.body.items.item;
        return res.send({ common, image, info, intro });
      })
    );
};
