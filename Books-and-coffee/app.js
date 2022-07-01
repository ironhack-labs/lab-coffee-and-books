require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "Books and coffee";

app.locals.appTitle = `${capitalized(projectName)}`;

require("./routes/index.routes")(app)

require("./error-handling")(app);


module.exports = app;




