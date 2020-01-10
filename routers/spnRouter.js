import express from "express";
import routes from "../routes";
import { getSpnList, getSpnDetailAll } from "../controllers/spnController";

const spnRouter = express.Router();

spnRouter.get(routes.home);

spnRouter.get(routes.tourist, getSpnList);
spnRouter.get(routes.touristDetail(), getSpnDetailAll);

spnRouter.get(routes.cultural, getSpnList);
spnRouter.get(routes.culturalDetail(), getSpnDetailAll);

spnRouter.get(routes.festival, getSpnList);
spnRouter.get(routes.festivalDetail(), getSpnDetailAll);

spnRouter.get(routes.food, getSpnList);
spnRouter.get(routes.foodDetail(), getSpnDetailAll);

spnRouter.get(routes.rooms, getSpnList);
spnRouter.get(routes.roomsDetail(), getSpnDetailAll);

spnRouter.get(routes.shopping, getSpnList);
spnRouter.get(routes.shoppingDetail(), getSpnDetailAll);

spnRouter.get(routes.leisure, getSpnList);
spnRouter.get(routes.leisureDetail(), getSpnDetailAll);

spnRouter.get(routes.traffic, getSpnList);
spnRouter.get(routes.trafficDetail(), getSpnDetailAll);

export default spnRouter;
