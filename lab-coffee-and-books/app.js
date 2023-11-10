require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app)
const projectName = "lab-coffee-and-books"

app.locals.appTitle = `${projectName}`

require('./routes')(app)
require("./error-handling")(app);

module.exports = app;
