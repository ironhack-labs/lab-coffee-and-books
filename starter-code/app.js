require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const handlebars = require('hbs')
const app = express()

// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Base URLS
// app.use('/', require('./routes/base.routes'))
require('./routes')(app)

//EXPORT VARIABLES TO HBS
handlebars.registerHelper('key', () => process.env.KEY)

module.exports = app
