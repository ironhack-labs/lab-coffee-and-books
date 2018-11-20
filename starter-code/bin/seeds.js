const mongoose = require("mongoose");
const Place = require("../models/place");

mongoose
  .connect('mongodb://localhost/books-and-coffe', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const places = [{
        name: "Paco's beers",
        type: "Coffe shop",
        coordinates: [41.386230, 2.174980]
  }]
  Place.create(places, err => {
    if (err) {
      throw err;
    }
    console.log(`Created ${places.length} places`);
    mongoose.connection.close();
  });
  
  console.log(places)