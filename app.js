
require("dotenv").config();


require("./db");


const express = require("express");


const hbs = require("hbs");

const app = express();


require("./config")(app);


const capitalize = require("./utils/capitalize");
const projectName = "cofeemap";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRoutes = require('./routes/place.routes')
app.use('/', placesRoutes)
const mapsRoutes = require('./routes/maps.routes')
app.use('/', mapsRoutes)

const apiRoutes = require('./routes/api.routes')
app.use('/api', apiRoutes)


require("./error-handling")(app);

module.exports = app;
