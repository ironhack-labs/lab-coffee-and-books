
require("dotenv/config");


require("./db");


const express = require("express");


const hbs = require("hbs");

const app = express();


require("./config")(app);


app.locals.appTitle = 'Coffee N Books';

// 👇 Start handling routes here
require('./routes')(app)

const api = require("./routes/api.routes")
app.use("/api", api)


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
