
require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();


require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "cafeybollos";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const placesRoutes = require("./routes/place.routes");
app.use("/places", placesRoutes);

const mapRoutes = require("./routes/places.maps.routes");
app.use("/places", mapRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);


require("./error-handling")(app);

module.exports = app;
