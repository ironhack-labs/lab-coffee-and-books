require('dotenv').config()

const express = require('express')
const app = express()

// DB, middlewares, locals & debug
require('./configs/mongoose.config')
require('./configs/middleware.config')(app)
require('./configs/preprocessor.config')(app)
require('./configs/locals.config')(app)
require('./configs/debug.config')

// Base URL's
app.use('/', require('./routes/index.routes'))
app.use('/', require('./routes/place.routes'))

module.exports = app