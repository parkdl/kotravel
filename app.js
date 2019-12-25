import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import listRouter from "./routers/listRouter";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import { corsOptions } from "./middleWare";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(cors(corsOptions));

app.use(routes.home, listRouter);

export default app;
