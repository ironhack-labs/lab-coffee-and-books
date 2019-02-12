const mongoose = require('mongoose');
const Place = require('../models/place');

const dbName = 'coffee-and-books';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const bcrypt = require("bcrypt");
// const bcryptSalt = 10;
// const salt = bcrypt.genSaltSync(bcryptSalt);


const places = [ 
  {
  name: "Hermann Eike",
  desc: "Pleasant local place",
  placeType: "Coffee",
  location: { type: "Point", coordinates: [13.3970559,52.5373329] }
  },
  {
  name: "Starbucks",
  desc: "In a pinch when travelling",
  placeType: "Coffee",
  location: { type: "Point", coordinates: [13.309752,52.5167286] }
  },
  {
  name: "The Barn",
  desc: "Trendy, expensive and very slow",
  placeType: "Coffee",
  location: { type: "Point", coordinates: [13.404411,52.528673] }
  },
  {
  name: "Dussmann",
  desc: "Wonderful media mecca",
  placeType: "Books",
  location: { type: "Point", coordinates: [13.3187469,52.5183134] }
  }
]

Place.deleteMany()
  .then(() => Place.create(places))
  .then(placeDocuments => {
    console.log(`Created the places.`)
    mongoose.connection.close()
  })
  .catch(err => {throw(err)})