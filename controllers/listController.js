import axios from "axios";
import { api } from "../api";
import { pagination } from "../middleWare";
import { detailCommon, detailImage, detailIntro, detailInfo } from "../assets/detailData";
import routes from "../routes";
import User from "../models/User";

const item = {
  typeNum: [12, 14, 15, 25, 28, 32, 38, 39],
  path: [
    "/tourist",
    "/cultural",
    "/festival",
    "/travelCourse",
    "/leisure",
    "/rooms",
    "/shopping",
    "/food"
  ],
  pathDetail: [
    "/tourist/",
    "/cultural/",
    "/festival/",
    "/travelCourse/",
    "/leisure/",
    "/rooms/",
    "/shopping/",
    "/food/"
  ]
};

export const getBaseList = async (req, res) => {
  const pathname = req._parsedUrl.pathname;
  const page = parseInt(req.query.page);

  for (var i = 0; i < item.path.length; i++) {
    if (item.path[i] === pathname) {
      await api
        .get("areaBasedList", {
          params: {
            contentTypeId: item.typeNum[i],
            arrange: "P",
            pageNo: page,
            numOfRows: 12
          }
        })
        .then(response => {
          const baseList = response.data.response.body.items.item;
          const totalCount = response.data.response.body.totalCount;
          const pageSize = response.data.response.body.numOfRows;

          const pager = pagination(totalCount, page, pageSize);

          const pageOfItems = baseList.slice(0, 12);

          return res.send({ pager, pageOfItems });
        });
    }
  }
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

export const getSearchData = async (req, res) => {
  const keyword = req.query.keyword;
  const page = parseInt(req.query.page);

  await api
    .get("searchKeyword", {
      params: {
        keyword: keyword,
        pageNo: page,
        numOfRows: 12
      }
    })
    .then(response => {
      const searchData = response.data.response.body.items.item;
      const totalCount = response.data.response.body.totalCount;
      const pageSize = response.data.response.body.numOfRows;

      const pager = pagination(totalCount, page, pageSize);

      const pageOfItems = searchData.slice(0, 12);
      console.log(response.data.response.body);

      return res.send({ pageOfItems, pager });
    });
};

export const postJoin = async (req, res) => {
  const {
    body: {
      data: { name, email, password1, password2 }
    }
  } = req;
  console.log(req.body);
  if (password1 !== password2) {
    res.status(400);
    res.redirect(routes.join);
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password1);
    } catch (error) {
      console.log(error);
    }
    res.redirect(routes.home);
  }
};
