module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/locales', require('./places.routes.js'))
    app.use('/api', require('./api.routes.js'))
}