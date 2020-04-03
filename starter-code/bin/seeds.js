const mongoose = require('mongoose');
const Place = require('../model/place');

const dbName = 'places';
mongoose.connect(`mongodb://localhost/${dbName}`);

const places = [
  {
  name: "Central Perk",
  type: "coffee shop"
},
{
  name: "Floreios e Borrões",
  type: "bookstore"
},
]


Place.create(places, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${places.length} places`)
  mongoose.connection.close();
})