const mongoose = require("mongoose");

const Places = require("../models/Places");

const places = [
  {
    name: "London",
    type: "coffee"
  }, {
    name: "Bookie",
    type: "bookstore"
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