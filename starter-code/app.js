// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");


const express = require("express");


const hbs = require("hbs");

const app = express();


require("./config")(app);


const capitalize = require("./utils/capitalize");
const projectName = "coffee&boooks";

app.locals.appTitle = `${capitalize(projectName)}`;


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placeRoutes = require("./routes/place-routes");
app.use("/places", placeRoutes);

require("./error-handling")(app);

module.exports = app;
