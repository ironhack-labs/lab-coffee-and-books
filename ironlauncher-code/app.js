require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
const express = require("express");

// Handles the handlebars
const hbs = require("hbs");

const app = express();

require("./config")(app);

// default value for title local
const projectName = "ironlauncher-code";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// Index route
const index = require("./routes/base");
app.use("/", index);
// Places route
const places = require("./routes/places");
app.use("/", places);
// API route
const API = require("./routes/api");
app.use("/", API);
// Map route
const maps = require("./routes/maps");
app.use("/", maps);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
