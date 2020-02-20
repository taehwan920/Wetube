import express from "express"; // == const express = require('express');
import morganLogger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hello from Ass')

const handleProfile = (req, res) => res.send('You are on my profile');

const betweenHome = (req, res, next) => {
    console.log('Between');
    next();
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morganLogger('dev'));
app.use(helmet());


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);