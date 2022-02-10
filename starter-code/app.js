
require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

app.locals.appTitle = `Coffee Books project`;

const index = require('./routes/index');
app.use('/', index);

const placesRoutes = require('./routes/places.routes')
app.use('/', placesRoutes)

const mapRoutes = require('./routes/api.routes')
app.use('/', mapRoutes)

require("./error-handling")(app);

module.exports = app;
