const { map } = require('../app')

module.exports = app => {
    app.use('/', require('./index.routes'))
    app.use('/shop', require('./coffeebooks.routes'))
    app.use('/map', require('./map.routes'))
    app.use('/api', require('./api.routes'))

}