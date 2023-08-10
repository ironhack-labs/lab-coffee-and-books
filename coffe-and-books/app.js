
require("dotenv").config();


require("./db");


const express = require("express");


const hbs = require("hbs");

const app = express();


require("./config")(app);


const capitalize = require("./utils/capitalize");
const projectName = "coffe-and-books";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/", userRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

const mapsRoutes = require("./routes/maps.routes");
app.use("/", mapsRoutes);


require("./error-handling")(app);

module.exports = app;
