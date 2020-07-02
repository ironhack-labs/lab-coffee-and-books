require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()
const handlebars = require('hbs')


// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Base URLS
require('./routes')(app)

handlebars.registerHelper('key', () => process.env.APIKEY)

module.exports = app