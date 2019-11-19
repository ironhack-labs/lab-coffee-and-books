require('dotenv').config();

const express = require('express')
const path = require('path')
const app = express()


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

require('./configs/mongoose.config')
require('./configs/middlewares.config')(app)
require('./configs/locals.config')(app)


app.use('/', require('./routes/index.routes'))
app.use('/places', require('./routes/places.routes'))




module.exports = app;
