require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "coffe";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const mapRoutes = require("./routes/maps.routes")
app.use("/maps", mapRoutes)

const placeRoutes = require("./routes/place.routes.js")
app.use("/", placeRoutes)

const apiRoutes = require("./routes/api.routes")
app.use("/api", apiRoutes)


require("./error-handling")(app);

module.exports = app;
