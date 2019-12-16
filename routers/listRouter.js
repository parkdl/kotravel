import express from "express";
import routes from "../routes";
import {
  getTourist,
  getCultural,
  getFestival,
  getFood,
  getRooms,
  getShopping,
  getTravelCourse,
  getLeisure,
  getDetailAll
} from "../controllers/listController";

const listRouter = express.Router();

listRouter.get(routes.home);

listRouter.get(routes.tourist, getTourist);
listRouter.get(routes.touristDetail(), getDetailAll);

listRouter.get(routes.cultural, getCultural);
listRouter.get(routes.festival, getFestival);
listRouter.get(routes.food, getFood);
listRouter.get(routes.rooms, getRooms);
listRouter.get(routes.shopping, getShopping);
listRouter.get(routes.travelCourse, getTravelCourse);
listRouter.get(routes.leisure, getLeisure);

export default listRouter;
