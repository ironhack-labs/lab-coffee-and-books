require("dotenv").config()
require("./db")

const express = require("express")
const hbs = require("hbs")

const app = express()

require("./config")(app)

app.locals.appTitle = 'Coffee n Books'

// Routes
const indexRoutes = require("./routes/index.routes")
app.use("/", indexRoutes)

const placesRoutes = require("./routes/places.routes")
app.use("/", placesRoutes)

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

// Errors
require("./error-handling")(app)

module.exports = app