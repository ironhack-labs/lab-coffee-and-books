module.exports = app => {
  app.use('/', require('./base.routes'))
  app.use('/', require('./place.routes'))
  app.use('/place/list', require('./maps.routes'))
  app.use('/', require('./api.routes'))
}