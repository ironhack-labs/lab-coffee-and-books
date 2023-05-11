require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "lab-coffer-and-books";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);
const placesRoutes = require("./routes/places.routes");
app.use("/", placesRoutes);

const mapsRoutes = require("./routes/maps.routes");
app.use("/", mapsRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/", apiRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
