require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

//---CONFIG REQUIREMENTS---//
require('./configs/mongoose.config')
require('./configs/middlewares.config')(app)

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

//---DEFAULT LOCAL TITLES---//
app.locals.title = 'COFFEE & BOOKS';

//---BASE URL---//
app.use('/', require('./routes/index.routes'));

module.exports = app;