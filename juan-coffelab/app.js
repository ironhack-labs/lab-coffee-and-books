require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const projectName = "CoffeLab";

app.locals.appTitle = `${projectName}`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);
const coffeesRoutes = require("./routes/coffees.routes");
app.use("/coffees", coffeesRoutes);
const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

require("./error-handling")(app);

module.exports = app;
