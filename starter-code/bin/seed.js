const mongoose = require('mongoose');
const Place = require('../models/place.model');

const dbName = 'coffee-books';
mongoose.connect(`mongodb://localhost/${dbName}`)

const places = [{
    name: "Casa del Libro",
    type: "bookstore",
  },
  {
    name: "MÜR Café",
    type: "coffee shop"
  },
  {
    name: "Cereal Hunters",
    type: "coffee shop",
    location: {
    coordenates: [-3.698788, 40.42747]
    }
  }
];

Place.insertMany(places)