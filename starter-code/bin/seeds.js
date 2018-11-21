const mongoose = require("mongoose");

const Places = require("../models/Places");

const places = [
  {
    name: "London",
    type: "coffee",
    location:{
      lat:"55",
      lng:"22"
    }
  }, {
    name: "Bookie",
    type: "bookstore",
    location:{
      lat:"-20",
      lng:"-50"
    }
  }
]

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Places.collection.drop();
  })
  .then(() => {
    return Places.insertMany(places)
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });