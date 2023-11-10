
require("dotenv").config();


require("./db");


const express = require("express");


const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "lab-coffee";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRoutes = require("./routes/places.routes")
app.use("/", placesRoutes)

const apiRoutes = require("./routes/api.routes")
app.use("/api", apiRoutes)

require("./error-handling")(app);

module.exports = app;
