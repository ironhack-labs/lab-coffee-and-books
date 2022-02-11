

module.exports = (app) => {
  app.use("/", require("./base.routes"))
  app.use('/', require("./place.routes"))
  app.use('/api', require('./api.routes'))
};
