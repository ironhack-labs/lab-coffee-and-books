require("dotenv").config();

require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);

app.locals.appTitle = 'Coffe & books!'

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const restaurantRoutes = require("./routes/restaurants.routes");
app.use("/restaurants", restaurantRoutes);

const mapsRoutes = require("./routes/maps.routes");
app.use("/maps", mapsRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

require("./error-handling")(app);

module.exports = app;
