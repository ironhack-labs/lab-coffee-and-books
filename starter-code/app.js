
require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const projectName = "starter-code";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.appTitle = `Books & coffee`;


const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.use("/", require("./routes/places-routes"))

require("./error-handling")(app);

module.exports = app;
