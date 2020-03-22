import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from "express"; // == const express = require('express');
import helmet from 'helmet';
import { localsMiddleware } from "./middleware";
import morganLogger, { format } from 'morgan';
import mongoose, { mongo } from "mongoose";
import MongoStore from "connect-mongo";
import globalRouter from './routers/globalRouter';
import passport from "passport";
import session from "express-session";
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import routes from './routes'

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set('view engine', "pug")
app.use("/uploads", express.static("uploads")) // directory에서 file을 전달하는 새 미들웨어
app.use("/static", express.static("static")) // 새로 추가한 static. static이란 파일은 없는데 왜 연결..
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morganLogger('dev'));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;