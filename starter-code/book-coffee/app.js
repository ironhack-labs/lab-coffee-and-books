'use strict';

// -- require npm packages

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// -- require your own modules (router, models)
const index = require('./routes/index');
const users = require('./routes/users');

// -- create app connect to db

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/database-name', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

// -- setup the app
const app = express();

// -- view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// -- configure middlewares (static, session, cookies, body, ...)

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// -- routes
app.use('/', index);
app.use('/users', users);

// -- 404 and error handler

app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

module.exports = app;
