require("dotenv").config();

const mongoose = require("mongoose");
const Place = require("../models/Place");
const placeData = require("./place_data.js");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then( () => {
  Place.collection.drop();

  Place.create(placeData)
    .then( () => {
      mongoose.disconnect();
    })
})