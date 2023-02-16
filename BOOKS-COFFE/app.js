require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "BOOKS-COFFE";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRoutes = require("./routes/places.routes");
app.use("/places", placesRoutes);

const ApiRoutes = require("./routes/Api.routes");
app.use("/api", ApiRoutes);

require("./error-handling")(app);

module.exports = app;
