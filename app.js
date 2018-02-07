'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

const index = require('./routes/index');

const app = express();

// create app connect to db

mongoose.connect('mongodb://localhost/books-coffee', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

// -- setup the app
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', '_layout');

// configure middlewares (static, session, cookies, body, ...)
app.use(express.static(path.join(__dirname, '/public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// -- routes
app.use('/', index);

// -- 404 and error handler

// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

// start app
app.listen(3000, () => {
  console.log('Easy web dev. 3000!');
});
