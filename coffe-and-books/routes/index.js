module.exports = app => {
    
    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)

    const placesRouter = require('./places.routes')
    app.use('/places', placesRouter)

    const mapsRouter = require('./maps.routes')
    app.use('/mapa', mapsRouter)

    const apiRouter = require('./api.routes')
    app.use('/api', apiRouter)
}