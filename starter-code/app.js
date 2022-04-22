require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "lab-coffee-and-books";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

const index = require("./routes/index.routes");
app.use("/", index);

const places = require("./routes/places.routes");
app.use("/places", places);

require("./error-handling")(app);

module.exports = app;

const apiRouter = require('./routes/api.routes');
app.use('/api', apiRouter);