module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/sites', require('./sites.routes'))

}