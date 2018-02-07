//importando módules
//app ppal
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
//leer/interpretar cookies  - OJO SE CONFIGURA ABAJO
const cookieParser = require("cookie-parser");
//LEE LA INFO DE FORMS POST
const bodyParser = require("body-parser");
//CREACION DE COOKIES
const session = require("express-session");
//APP PARA BBDD
const mongoose = require("mongoose");
//MANDA LA SESIÓN/COOKIE A LA BBDD
const MongoStore = require("connect-mongo")(session);
//CONFIG bbdd
const { dbUrl } = require("./config");
//CONECTA LA BBDD
mongoose.connect(dbUrl).then(() => console.log("db running"));

const index = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
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

module.exports = app;
