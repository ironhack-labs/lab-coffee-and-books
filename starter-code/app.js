require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const projectName = "coffe&books";

app.locals.appTitle = `${projectName}`;

const index = require("./routes/index.routes");
app.use("/", index);

require("./error-handling")(app);

module.exports = app;
