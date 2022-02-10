require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const projectName = "coffee-and-books";

app.locals.appTitle = projectName

// Routes: 
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRoutes = require("./routes/places.routes")
app.use("/places", placesRoutes)

const api = require('./routes/api.routes')
app.use('/api', api)

// Errors
require("./error-handling")(app);

module.exports = app;
