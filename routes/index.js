module.exports = app =>{
  
const placesRouter = require("./places.routes")
app.use("/", placesRouter)

const mapsRouter = require("./maps.routes")
app.use("/", mapsRouter)

const apiRouter = require("./api.routes")
app.use("/", apiRouter)
}


