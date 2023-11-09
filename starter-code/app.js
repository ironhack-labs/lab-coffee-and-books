require("dotenv").config();

require("./db");

const express = require("express");
const app = express();


require("./config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "y";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

require('./routes')(app)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
