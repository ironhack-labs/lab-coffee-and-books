module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))

    // Places URLS
    app.use('/places', require('./places.routes'))

    // API URLS
    app.use('/api', require('./api.routes'))
}