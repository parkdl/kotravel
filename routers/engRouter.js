import express from "express";
import routes from "../routes";
import {
  getEngList,
  getEngDetailAll,
  getSearchData,
  getEngAreaDatas,
  getHome
} from "../controllers/engController";

const engRouter = express.Router();

engRouter.get(routes.home, getHome);

engRouter.get(routes.searchResult, getSearchData);

engRouter.get(routes.tourist, getEngList);
engRouter.get(routes.touristDetail(), getEngDetailAll);

engRouter.get(routes.cultural, getEngList);
engRouter.get(routes.culturalDetail(), getEngDetailAll);

engRouter.get(routes.festival, getEngList);
engRouter.get(routes.festivalDetail(), getEngDetailAll);

engRouter.get(routes.food, getEngList);
engRouter.get(routes.foodDetail(), getEngDetailAll);

engRouter.get(routes.rooms, getEngList);
engRouter.get(routes.roomsDetail(), getEngDetailAll);

engRouter.get(routes.shopping, getEngList);
engRouter.get(routes.shoppingDetail(), getEngDetailAll);

engRouter.get(routes.leisure, getEngList);
engRouter.get(routes.leisureDetail(), getEngDetailAll);

engRouter.get(routes.traffic, getEngList);
engRouter.get(routes.trafficDetail(), getEngDetailAll);

engRouter.get(routes.area, getEngAreaDatas);

export default engRouter;
