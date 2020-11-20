module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/sitios', require('./places.routes.js'))
    
}