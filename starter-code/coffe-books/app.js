require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "coffe-books";

app.locals.appTitle = `${capitalized(projectName)}`;

const index = require("./routes/index.routes");
app.use("/", index);

require("./error-handling")(app);

module.exports = app;
