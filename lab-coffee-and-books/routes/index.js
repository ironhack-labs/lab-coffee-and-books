module.exports = app => {
    const indexRoutes = require('./index.routes')
    app.use('/', indexRoutes)
    
    const placeRoutes = require('./place.routes')
    app.use('/lugares', placeRoutes)

    const apiRoutes = require('./api.routes')
    app.use('/api', apiRoutes)
}