
require("dotenv").config();


require("./db");


const express = require("express");




const app = express();


require("./config")(app);


const capitalize = require("./utils/capitalize");
const projectName = "Coffe";

app.locals.appTitle = `Welcome to coffeePlaces`;

require('./routes')(app)

require("./error-handling")(app);

module.exports = app;
