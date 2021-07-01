module.exports = app => {

  app.use('/', require("./base.routes.js"))
  app.use('/place', require('./places.routes.js'))
  // app.use('/api', require('./api.routes.js'))

}




