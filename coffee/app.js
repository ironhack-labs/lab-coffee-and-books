

require("dotenv/config");


require("./db");



const express = require("express");



const hbs = require("hbs");

const app = express();


require("./config")(app);


app.locals.title = `Coffee`;


const index = require("./routes/index");
app.use("/", index);

const places = require("./routes/places.routes");
app.use("/places", places);


require("./error-handling")(app);

module.exports = app;
