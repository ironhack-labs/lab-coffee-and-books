module.exports = app => {
    const indexRoutes = require ('./index.routes')

    const mapRoutes = require('./maps.routes')

    const places = require('./places.routes')
    app.use('/places', places)

    const apiRoutes = require('./api.routes')
    app.use('/api', apiRoutes)
}