
require("dotenv").config();

require("./db");


const express = require("express");
const app = express();

const hbs = require("hbs");

require("./config")(app);

const projectName = "books-and-coffee";
app.locals.appTitle = `${projectName} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placeRoutes = require("./routes/place.routes");
app.use("/", placeRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

require("./error-handling")(app);

module.exports = app;
