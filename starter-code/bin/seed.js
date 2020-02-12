const mongoose = require('mongoose');
const Place = require('../models/place.model');

const dbName = 'coffes-books-places';
mongoose.connect(`mongodb://localhost/${dbName}`)



const places = [
  {
    name: "Hola Coffe",
    coords: {
      lat: 40.407249,
      lng: -3.699019
    },
    type: "coffee shop"
  },
  {
    name: "Gatoteca",
    coords: {
      lat: 40.407918,
      lng: -3.696283
    },
    type: "coffee shop"

  },
  {
    name: "La Central",
    coords: {
      lat: 40.419446,
      lng: -3.705960
    },
    type: "bookstore"
  }
]


Place.create(places, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${places.length} places`)
  mongoose.connection.close()
})