require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

const hbs = require("hbs");

require("./config")(app);

app.locals.appTitle = `App de lugares`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const mapsRoutes = require("./routes/maps.routes");
app.use("/maps", mapsRoutes);

const placeRoutes = require("./routes/place.routes");
app.use("/place", placeRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

require("./error-handling")(app);

module.exports = app;
