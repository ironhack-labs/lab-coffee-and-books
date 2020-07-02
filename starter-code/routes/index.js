module.exports = app => {

    // Base URLS
    app.use('/places', require('./place.routes.js'))
}