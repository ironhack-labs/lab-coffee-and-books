require('dotenv').config();

//App
const express = require('express')
const app = express()

// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/views.config')(app)
require('./configs/locals.config')(app)

//mongoose-DataBase
require('./configs/mongoose.cofig')

//debugger
require('./configs/debugger.config')

// Base URLS
require('./routes')(app)


module.exports = app;
