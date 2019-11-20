const express = require('express')
const app = express();
const path = require('path')
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);
const index = require('./routes/place.routes');


require('dotenv').config();
require('./configs/mongoose.config')
require('./configs/middlewares.config')(app)
require('./configs/locals.config')(app)


app.use('/', index);
app.use('/books', require('./routes/place.routes'))


module.exports = app