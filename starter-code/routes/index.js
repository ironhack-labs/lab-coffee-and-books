module.exports = app => {
    const indexRoutes = require('./index.routes')
    app.use('/', indexRoutes)

    const mapRoutes = require('./map.routes')
    app.use('/', mapRoutes)

    const placeRoutes = require('./places.routes')
    app.use('/', placeRoutes)

    const apiRoutes = require('./api.routes')
    app.use('/api', apiRoutes)
}