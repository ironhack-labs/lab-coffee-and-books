require("dotenv").config();
require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "lab";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRouter = require('./routes/places.routes')
app.use('/places', placesRouter)

const mapRouter = require('./routes/map.routes')
app.use('/map', mapRouter)

const apiRoutes = require('./routes/api.routes')
app.use('/api', apiRoutes)

require("./error-handling")(app);

module.exports = app;
