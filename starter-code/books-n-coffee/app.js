require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

app.locals.siteTitle = `Books-n-coffee`;

require("./routes")(app)
require("./error-handling")(app);

module.exports = app;
