require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

app.locals.appTitle = `Coffees & Bookstores`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRoutes = require("./routes/places.routes");
app.use("/places", placesRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

require("./error-handling")(app);

module.exports = app;
