/*jshint esversion: 6*/

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
const session       = require("express-session");
const bcrypt        = require("bcrypt");
const flash = require("connect-flash");
const nodeSassMiddleware = require("node-sass-middleware");


var index = require('./routes/index');
var users = require('./routes/users');
// var place = require('./models/place');
// var user = require('./models/user');

var app = express();

//mongoose configuration
const mongoose = require("mongoose");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost/coffee-and-books");

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var router  = express.Router();



module.exports = app;
