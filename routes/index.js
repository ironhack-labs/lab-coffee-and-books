module.exports = app => {

  // Base routes
  const indexRoute = require("./index.routes");
  app.use("/", indexRoute);

  //Places routes

  const places = require('./places.routes')
  app.use('/', places)

  //api.routes

  const api = require('./api.routes')
  app.use('/', api)

}

