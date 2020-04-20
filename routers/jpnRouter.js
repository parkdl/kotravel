import express from "express";
import routes from "../routes";
import {
  getJpnList,
  getJpnDetailAll,
  getSearchData,
  getJpnAreaDatas,
  getHome
} from "../controllers/jpnController";

const jpnRouter = express.Router();

jpnRouter.get(routes.home, getHome);

jpnRouter.get(routes.searchResult, getSearchData);

jpnRouter.get(routes.tourist, getJpnList);
jpnRouter.get(routes.touristDetail(), getJpnDetailAll);

jpnRouter.get(routes.cultural, getJpnList);
jpnRouter.get(routes.culturalDetail(), getJpnDetailAll);

jpnRouter.get(routes.festival, getJpnList);
jpnRouter.get(routes.festivalDetail(), getJpnDetailAll);

jpnRouter.get(routes.food, getJpnList);
jpnRouter.get(routes.foodDetail(), getJpnDetailAll);

jpnRouter.get(routes.rooms, getJpnList);
jpnRouter.get(routes.roomsDetail(), getJpnDetailAll);

jpnRouter.get(routes.shopping, getJpnList);
jpnRouter.get(routes.shoppingDetail(), getJpnDetailAll);

jpnRouter.get(routes.leisure, getJpnList);
jpnRouter.get(routes.leisureDetail(), getJpnDetailAll);

jpnRouter.get(routes.traffic, getJpnList);
jpnRouter.get(routes.trafficDetail(), getJpnDetailAll);

jpnRouter.get(routes.area, getJpnAreaDatas);

export default jpnRouter;
