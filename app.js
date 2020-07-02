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
require('./routes')(app)

// Export variables to HBS
handlebars.registerHelper('key', () => process.env.KEY)

module.exports = app
