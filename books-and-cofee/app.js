require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "books-and-cofee";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const restaurantsRoutes = require("./routes/restaurants.routes");
app.use("/places", restaurantsRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

require("./error-handling")(app);

module.exports = app;
