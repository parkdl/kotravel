import express from "express";
import routes from "../routes";
import { getGerList, getGerDetailAll } from "../controllers/gerController";

const gerRouter = express.Router();

gerRouter.get(routes.home);

gerRouter.get(routes.tourist, getGerList);
gerRouter.get(routes.touristDetail(), getGerDetailAll);

gerRouter.get(routes.cultural, getGerList);
gerRouter.get(routes.culturalDetail(), getGerDetailAll);

gerRouter.get(routes.festival, getGerList);
gerRouter.get(routes.festivalDetail(), getGerDetailAll);

gerRouter.get(routes.food, getGerList);
gerRouter.get(routes.foodDetail(), getGerDetailAll);

gerRouter.get(routes.rooms, getGerList);
gerRouter.get(routes.roomsDetail(), getGerDetailAll);

gerRouter.get(routes.shopping, getGerList);
gerRouter.get(routes.shoppingDetail(), getGerDetailAll);

gerRouter.get(routes.leisure, getGerList);
gerRouter.get(routes.leisureDetail(), getGerDetailAll);

gerRouter.get(routes.traffic, getGerList);
gerRouter.get(routes.trafficDetail(), getGerDetailAll);

export default gerRouter;
