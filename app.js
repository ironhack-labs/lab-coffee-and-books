require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()
const hbs = require('hbs')

// Configs
hbs.registerPartials(__dirname + "/views/partials")
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Base URLS
require('./routes/index.routes')(app)

module.exports = app
