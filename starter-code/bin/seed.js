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
  }
];

Place.insertMany(places)