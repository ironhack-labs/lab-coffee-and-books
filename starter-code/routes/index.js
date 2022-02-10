

module.exports = app => {



  const apiRoutes = require('./api.routes')
  app.use("/api", apiRoutes)

 const placesRoutes =require('./places.routes')
 app.use("/places",placesRoutes)


  const mapRouter = require("./map.routes");
  app.use("/map", mapRouter);


/* GET home page */
 const indexRouter = require("./index.routes");
 app.use("/", indexRouter);
}




