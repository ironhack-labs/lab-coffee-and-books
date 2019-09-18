require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

require('./configs/db.config');

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



// default value for title local
app.locals.title = 'Coffee & Books';

// app.get("/master/:sortOrder?", (req, res) => {
//   // if (req.params.sortOrder)
//   console.log(req.params.sortOrder);
//   if (
//     req.params.sortOrder === undefined ||
//     (req.params.sortOrder !== "asc" && req.params.sortOrder !== "desc")
//   ) {
//     Movies.find()
//       .select({ title: 1, year: 1 })
//       .then(allMovies => {
//         res.render("index", {
//           allMovies,
//           creator: process.env.MY_CREATOR,
//           host: process.env.HOST
//         });
//       });
//   } else {
//     if (req.params.sortOrder === "asc") {
//       Movies.find()
//         .select({ title: 1, year: 1 })
//         .sort({ year: 1 })
//         .then(allMovies => {
//           res.render("index", {
//             allMovies,
//             creator: process.env.MY_CREATOR,
//             host: process.env.HOST
//           });
//         });
//     }

//     if (req.params.sortOrder === "desc") {
//       Movies.find()
//         .select({ title: 1, year: 1 })
//         .sort({ year: -1 })
//         .then(allMovies => {
//           res.render("index", {
//             allMovies,
//             creator: process.env.MY_CREATOR,
//             host: process.env.HOST
//           });
//         });
//     }
//   }
// });


const index = require('./routes/index');
app.use('/', index);


module.exports = app;
