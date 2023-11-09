module.exports = app => {
    const indexRoutes = require('./index.routes')
    app.use('/', indexRoutes)
    const placesRoutes = require('./places.routes')
    app.use('/places', placesRoutes)
    const mapRoutes = require('./map.routes')
    app.use('/map', mapRoutes)
    const apiRoutes = require('./api.routes')
    app.use('/api', apiRoutes)
}