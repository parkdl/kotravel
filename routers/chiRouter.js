import express from "express";
import routes from "../routes";
import { getChiList, getChiDetailAll } from "../controllers/chiController";

const chiRouter = express.Router();

chiRouter.get(routes.home);

chiRouter.get(routes.tourist, getChiList);
chiRouter.get(routes.touristDetail(), getChiDetailAll);

chiRouter.get(routes.cultural, getChiList);
chiRouter.get(routes.culturalDetail(), getChiDetailAll);

chiRouter.get(routes.festival, getChiList);
chiRouter.get(routes.festivalDetail(), getChiDetailAll);

chiRouter.get(routes.food, getChiList);
chiRouter.get(routes.foodDetail(), getChiDetailAll);

chiRouter.get(routes.rooms, getChiList);
chiRouter.get(routes.roomsDetail(), getChiDetailAll);

chiRouter.get(routes.shopping, getChiList);
chiRouter.get(routes.shoppingDetail(), getChiDetailAll);

chiRouter.get(routes.leisure, getChiList);
chiRouter.get(routes.leisureDetail(), getChiDetailAll);

chiRouter.get(routes.traffic, getChiList);
chiRouter.get(routes.trafficDetail(), getChiDetailAll);

export default chiRouter;
