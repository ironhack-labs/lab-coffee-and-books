require("dotenv").config();
require("./db");

const express = require("express");

const app = express();

require("./config")(app);

app.locals.appTitle = `Coffee and Books`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRoutes = require("./routes/places.routes");
app.use("/", placesRoutes);

require("./error-handling")(app);

module.exports = app;
