require("dotenv").config();
require("./db");

const express = require("express");

const hbs = require("hbs");
const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "Coffee-and-books";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes)

const placeRoutes = require("./routes/place.routes");
app.use("/", placeRoutes);



require("./error-handling")(app);

module.exports = app;
