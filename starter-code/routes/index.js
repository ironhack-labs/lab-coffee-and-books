module.exports = app => {

  const placeRouter = require('./place.routes')
  app.use('/', placeRouter)

  const apiRouter = require('./api.routes')
  app.use('/api', apiRouter)

}
