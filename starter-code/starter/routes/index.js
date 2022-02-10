module.exports = (app) => {
  // Base routes
  const indexRouter = require('./index.routes')
  app.use('/', indexRouter)

  // Place routes
  const placeRouter = require('./place.routes')
  app.use('/', placeRouter)

  // Place routes
  const apiRouter = require('./api.routes')
  app.use('/', apiRouter)
}
