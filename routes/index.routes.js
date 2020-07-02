const express = require('express')
const router = express.Router

module.exports = app => {
    app.use('/', require('./base.routes'))
    app.use('/place', require('./places.routes'))
}
