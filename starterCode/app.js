require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "starterCode";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const places = require('./routes/place.routes')
app.use("/places", places);

const apiRouter = require("./routes/api.routes");
app.use("/api", apiRouter)


require("./error-handling")(app);

module.exports = app;
