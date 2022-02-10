require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

app.locals.appTitle = `COFFEE & BOOKS`;

const indexRouter = require("./routes/index.routes");
app.use("/", indexRouter);

const placesRouter = require('./routes/places.routes')
app.use('/', placesRouter)

const apiRouter = require('./routes/api.routes')
app.use('/api', apiRouter)


require("./error-handling")(app);

module.exports = app;
