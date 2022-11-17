module.exports = app => {


  const indexRouter = require("./index.routes");
  app.use("/", indexRouter);



  const placesRouter = require("./places.routes");
  app.use("/place", placesRouter);




  app.use('/', require('./maps.routes'))
  app.use('/api', require('./api.routes'))
}



