module.exports = app => {

    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)

    const sitesRouter = require('./sites.routes')
    app.use('/listado', sitesRouter)

    app.use('/', require('./map.routes'))
    app.use('/api', require('./api.routes'))

}