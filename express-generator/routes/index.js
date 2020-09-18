module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/places', require('./places.routes'))
    app.use('/', require('./api.routes'))

}