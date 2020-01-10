import express from "express";
import routes from "../routes";
import { getBaseList, getDetailAll } from "../controllers/listController";

const korRouter = express.Router();

korRouter.get(routes.home);

korRouter.get(routes.tourist, getBaseList);
korRouter.get(routes.touristDetail(), getDetailAll);

korRouter.get(routes.cultural, getBaseList);
korRouter.get(routes.culturalDetail(), getDetailAll);

korRouter.get(routes.festival, getBaseList);
korRouter.get(routes.festivalDetail(), getDetailAll);

korRouter.get(routes.food, getBaseList);
korRouter.get(routes.foodDetail(), getDetailAll);

korRouter.get(routes.rooms, getBaseList);
korRouter.get(routes.roomsDetail(), getDetailAll);

korRouter.get(routes.shopping, getBaseList);
korRouter.get(routes.shoppingDetail(), getDetailAll);

korRouter.get(routes.travelCourse, getBaseList);
korRouter.get(routes.travelCourseDetail(), getDetailAll);

korRouter.get(routes.leisure, getBaseList);
korRouter.get(routes.leisureDetail(), getDetailAll);

export default korRouter;
