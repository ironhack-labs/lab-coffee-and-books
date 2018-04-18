require("dotenv").config();

const mongoose = require("mongoose");
const Place = require("../models/place");
const places = require("./place_data");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
  console.log(`Connected to db ${dbURL}`);
  Place.collection.drop();
})
Place.create(places)
.then( () =>{
    mongoose.disconnect();
})
  
