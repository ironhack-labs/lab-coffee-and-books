// To insert in "bin/seeds.js"

const mongoose = require('mongoose');
const Place = require('../models/place.js');

const dbName = 'RestaurantsBooks';
mongoose.connect(`mongodb://localhost/${dbName}`,{useNewUrlParser: true});

const places = [
  {
    name: "La esquina del Real",
    type: "coffee shop"
  },
  {
    name: "La casa del libro",
    type: "bookstore"
  },
  {
    name: "Fnac books",
    type: "bookstore"
  },
  {
    name: "Oja la",
    type: "coffee shop"
  }

];
Place.collection.drop();
Place.create(places, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${places.length} places`)
  mongoose.connection.close()
});