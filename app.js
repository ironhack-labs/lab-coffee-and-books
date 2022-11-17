require("dotenv").config();


require("./db");


const express = require("express");


const hbs = require("hbs");

const app = express();


require("./config")(app);


const capitalize = require("./utils/capitalize")
const projectName = "labcoffee"

app.locals.appTitle = `${capitalize(projectName)}`


const indexRoutes = require("./routes/index.routes")
app.use("/", indexRoutes)

const placesRoutes = require("./routes/places.routes")
app.use("/places", placesRoutes)

const apiRoutes = require("./routes/api.routes")
app.use("/places", apiRoutes)

const mapsRoutes = require("./routes/map.routes")
app.use("/places", mapsRoutes)

require("./error-handling")(app);

module.exports = app;
