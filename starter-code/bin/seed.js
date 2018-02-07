const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db-coffee-books');

const Place = require('../models/place');

const places = [
  {
    name: 'coffeeOne',
    type: 'coffeeShop',
    location: {
      type: 'point',
      coordinates: [45, 45]
    }
  },
  {
    name: 'bookOne',
    type: 'bookStore',
    location: {
      type: 'point',
      coordinates: [45, -45]
    }
  }
];

Place.create(places, (err, savedPlaces) => {
  if (err) { throw err; }

  savedPlaces.forEach(thePlace => {
    console.log(`${thePlace.name} - ${thePlace._id}`);
  });
  mongoose.disconnect();
});
