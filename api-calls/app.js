require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var app = express();

app.use(cors({
    origin: ['https://localhost:3000', 'http://localhost:3000'],
    credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api_calls');

app.use('/', indexRouter);
app.use('/beers', apiRouter);

module.exports = app;