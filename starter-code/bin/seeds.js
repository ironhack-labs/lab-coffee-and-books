require('dotenv').config();
const mongoose = require('mongoose');
const Place = require('../models/Place.js');

mongoose.connect(`mongodb://localhost/${process.env.DB}`);

const places = [
  {
    name: "Place1",
    type: "coffee shop",
  },
  {
    name: "Place2",
    type: "bookstore",
  },
  {
    name: "Place3",
    type: "coffee shop",
  }
]

Place.create(places, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${places.length} places`)
  mongoose.connection.close()
});