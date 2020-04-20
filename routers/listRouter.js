import express from "express";
import routes from "../routes";
import { getHome } from "../controllers/korController";

const listRouter = express.Router();

listRouter.get(routes.home, getHome);

export default listRouter;
