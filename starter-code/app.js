require('dotenv').config()

// Database
require('./configs/mongoose.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/preformatter.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)


app.use('/', require('./routes/index.routes'));
app.use('/places', require('./routes/places.routes'));


module.exports = app;
