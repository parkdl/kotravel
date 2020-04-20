import express from "express";
import routes from "../routes";
import {
  getRusList,
  getRusDetailAll,
  getSearchData,
  getRusAreaDatas,
  getHome
} from "../controllers/rusController";

const rusRouter = express.Router();

rusRouter.get(routes.home, getHome);

rusRouter.get(routes.searchResult, getSearchData);

rusRouter.get(routes.tourist, getRusList);
rusRouter.get(routes.touristDetail(), getRusDetailAll);

rusRouter.get(routes.cultural, getRusList);
rusRouter.get(routes.culturalDetail(), getRusDetailAll);

rusRouter.get(routes.festival, getRusList);
rusRouter.get(routes.festivalDetail(), getRusDetailAll);

rusRouter.get(routes.food, getRusList);
rusRouter.get(routes.foodDetail(), getRusDetailAll);

rusRouter.get(routes.rooms, getRusList);
rusRouter.get(routes.roomsDetail(), getRusDetailAll);

rusRouter.get(routes.shopping, getRusList);
rusRouter.get(routes.shoppingDetail(), getRusDetailAll);

rusRouter.get(routes.leisure, getRusList);
rusRouter.get(routes.leisureDetail(), getRusDetailAll);

rusRouter.get(routes.traffic, getRusList);
rusRouter.get(routes.trafficDetail(), getRusDetailAll);

rusRouter.get(routes.area, getRusAreaDatas);

export default rusRouter;
