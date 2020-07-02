require('dotenv').config();

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Base URLS
require('./routes/index.routes')(app)


const hbs = require('hbs');


// const app = express();


// const index = require('./routes/index');
// app.use('/', index);


module.exports = app;
