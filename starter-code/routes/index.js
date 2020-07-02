module.exports = app => {

  // Base URLS
  app.use('/', require('./base.routes.js'))
  app.use('/place', require('./places.routes.js'))
}

