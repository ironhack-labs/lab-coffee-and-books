require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const passport = require('passport');
// const hbs          = require('hbs');
// const mongoose     = require('mongoose');  //Me lo llevo a configs
const logger       = require('morgan');
const path         = require('path');


const session = require('express-session');

const flash = require("connect-flash");


require('./configs/passport.config')
require('./configs/mongoose.config')

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();




// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// Configuración sesión
app.use(session({
  secret: "secretoPssprt",
  resave: true,
  saveUninitialized: true
}))





//Flash Error handling
app.use(flash())




//iniciar passport y session *******
app.use(passport.initialize())
app.use(passport.session())


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';
app.locals.key = 'AIzaSyCUrMZVoUbvc-8FCi8gPoR6TRa_O5vegIU'




const index = require('./routes/places.routes');
app.use('/', index);


const placesRoutes = require('./routes/places.routes');
app.use('/places', placesRoutes);




module.exports = app;
