const mongoose = require('mongoose');
const Place = require('../models/place');

const dbName = 'starter-code';
mongoose.connect('mongodb://localhost/starter-code');

const place = [
  {
    name: 'Starbucks',
    type: 'Coffee Shop',
  },
];

Place.create(place, (err) => {
  if (err) {
    throw(err);
  }
  console.log(`Created ${place.length} movies`);
  mongoose.connection.close();
});
