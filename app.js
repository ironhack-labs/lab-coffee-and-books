require("dotenv").config();
require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "lab-coffee-and-books";

app.locals.appTitle = `CoffeBook's LAB_`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placeRoutes = require("./routes/place.routes");
app.use("/", placeRoutes);

const mapRoutes = require("./routes/map.routes");
app.use("/mapa", mapRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

require("./error-handling")(app);

module.exports = app;
