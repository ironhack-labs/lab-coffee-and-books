module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/places', require('./places.routes.js'))
    app.use('/', (req, res) => require('./api.routes.js'))
}