require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "Maps";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placeRoutes = require("./routes/place.routes");
app.use("/place", placeRoutes);

const apiRoutes = require("./routes/api.routes")
app.use("/api", apiRoutes)

require("./error-handling")(app);

module.exports = app;
