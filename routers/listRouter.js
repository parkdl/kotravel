import express from "express";
import routes from "../routes";
import { getBaseList, getDetailAll, getSearchData } from "../controllers/listController";

const listRouter = express.Router();

listRouter.get(routes.home);

listRouter.get(routes.search, getSearchData);

listRouter.get(routes.tourist, getBaseList);
listRouter.get(routes.touristDetail(), getDetailAll);

listRouter.get(routes.cultural, getBaseList);
listRouter.get(routes.culturalDetail(), getDetailAll);

listRouter.get(routes.festival, getBaseList);
listRouter.get(routes.festivalDetail(), getDetailAll);

listRouter.get(routes.food, getBaseList);
listRouter.get(routes.foodDetail(), getDetailAll);

listRouter.get(routes.rooms, getBaseList);
listRouter.get(routes.roomsDetail(), getDetailAll);

listRouter.get(routes.shopping, getBaseList);
listRouter.get(routes.shoppingDetail(), getDetailAll);

listRouter.get(routes.travelCourse, getBaseList);
listRouter.get(routes.travelCourseDetail(), getDetailAll);

listRouter.get(routes.leisure, getBaseList);
listRouter.get(routes.leisureDetail(), getDetailAll);

export default listRouter;
