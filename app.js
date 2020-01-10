import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import listRouter from "./routers/listRouter";

import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";
import morgan from "morgan";
import { corsOptions } from "./middleWare";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

import "./passport";
import engRouter from "./routers/engRouter";
import jpnRouter from "./routers/jpnRouter";
import chiRouter from "./routers/chiRouter";
import freRouter from "./routers/freRouter";
import gerRouter from "./routers/gerRouter";
import rusRouter from "./routers/rusRouter";
import spnRouter from "./routers/spnRouter";
import korRouter from "./routers/korRouter";

const app = express();

const CookieStore = MongoStore(session);

app.use(cookieParser());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(cors(corsOptions));

app.use(routes.home, listRouter);
app.use(routes.korean, korRouter);
app.use(routes.english, engRouter);
app.use(routes.japanase, jpnRouter);
app.use(routes.chinese, chiRouter);
app.use(routes.france, freRouter);
app.use(routes.germany, gerRouter);
app.use(routes.russian, rusRouter);
app.use(routes.spanish, spnRouter);

export default app;
