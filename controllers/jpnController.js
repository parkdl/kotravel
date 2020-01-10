import axios from "axios";
import { jpnApi } from "../api";
import { pagination } from "../middleWare";
import { detailCommon, detailImage, detailIntro, detailInfo } from "../assets/detail/jpnDetailData";

const item = {
  typeNum: [76, 78, 85, 75, 80, 79, 82, 77],
  path: [
    "/tourist",
    "/cultural",
    "/festival",
    "/leisure",
    "/rooms",
    "/shopping",
    "/food",
    "/traffic"
  ],
  pathDetail: [
    "/tourist/",
    "/cultural/",
    "/festival/",
    "/leisure/",
    "/rooms/",
    "/shopping/",
    "/food/"
  ]
};

export const getJpnList = async (req, res) => {
  const pathname = req._parsedUrl.pathname;
  const page = parseInt(req.query.page);

  for (var i = 0; i < item.path.length; i++) {
    if (item.path[i] === pathname) {
      await jpnApi
        .get("areaBasedList", {
          params: {
            contentTypeId: item.typeNum[i],
            arrange: "P",
            pageNo: page,
            numOfRows: 12
          }
        })
        .then(response => {
          const jpnBase = response.data.response.body.items.item;
          const totalCount = response.data.response.body.totalCount;
          const pageSize = response.data.response.body.numOfRows;

          const pager = pagination(totalCount, page, pageSize);

          const pageOfItems = jpnBase.slice(0, 12);

          return res.send({ pager, pageOfItems });
        });
    }
  }
};

export const getJpnDetailAll = (req, res) => {
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
