import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from "express"; // == const express = require('express');
import helmet from 'helmet';
import { localsMiddleware } from "./middleware";
import morganLogger, { format } from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import routes from './routes'

const app = express();

app.use(helmet());
app.set('view engine', "pug")
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morganLogger('dev'));

app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;