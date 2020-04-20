import express from "express";
import routes from "../routes";
import {
  getFreList,
  getFreDetailAll,
  getSearchData,
  getFreAreaDatas,
  getHome
} from "../controllers/freController";

const freRouter = express.Router();

freRouter.get(routes.home, getHome);

freRouter.get(routes.searchResult, getSearchData);

freRouter.get(routes.tourist, getFreList);
freRouter.get(routes.touristDetail(), getFreDetailAll);

freRouter.get(routes.cultural, getFreList);
freRouter.get(routes.culturalDetail(), getFreDetailAll);

freRouter.get(routes.festival, getFreList);
freRouter.get(routes.festivalDetail(), getFreDetailAll);

freRouter.get(routes.food, getFreList);
freRouter.get(routes.foodDetail(), getFreDetailAll);

freRouter.get(routes.rooms, getFreList);
freRouter.get(routes.roomsDetail(), getFreDetailAll);

freRouter.get(routes.shopping, getFreList);
freRouter.get(routes.shoppingDetail(), getFreDetailAll);

freRouter.get(routes.leisure, getFreList);
freRouter.get(routes.leisureDetail(), getFreDetailAll);

freRouter.get(routes.traffic, getFreList);
freRouter.get(routes.trafficDetail(), getFreDetailAll);

freRouter.get(routes.area, getFreAreaDatas);

export default freRouter;
