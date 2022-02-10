// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");
require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

app.locals.siteTitle = `Coffee_Shop and Book_Store`;

//Conectar Routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Places routes
const placesRouter = require('./routes/places.routes');
app.use('/places', placesRouter);


require("./error-handling")(app);

module.exports = app;
