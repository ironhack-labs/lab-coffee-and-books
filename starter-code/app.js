require('dotenv').config();

require('./configs/mongoose.config')


const express = require('express')
const app = express()
require('./configs/debugger.config')

require('./configs/middleware.config')(app)
require('./configs/preformatter.config')(app)
require('./configs/views.config')(app)
require('./configs/locals.config')(app)

app.use('/', require('./routes/index.routes'))
app.use('/places', require('./routes/place.routes'))

module.exports = app