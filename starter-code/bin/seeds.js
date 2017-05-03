/*jshint esversion: 6 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coffe-books');
const Place = require('../models/Place');

const places = [
  {
    name: "Toma Café",
    type: "coffe",
    location: { type: { type: 'Point' }, coordinates: [40.426978, -3.693237] }
  },
  {
    name: "HanSo Café",
    type: "coffe",
    location: {
      type: 'Point',
      location: { type: { type: 'Point' }, coordinates: [40.425195, -3.706076]}
    }
  },
  {
    name: "Librería Alcaná",
    type: "book",
    location: {
      type: 'Point',
      location: { type: { type: 'Point' }, coordinates: [40.462559, -3.693342]}
    }
  },
  {
    name: "Arrebato Libros",
    type: "book",
    location: {
      type: 'Point',
      location: { type: { type: 'Point' }, coordinates: [40.425855, -3.703849]}
    }
  }
];


Place.create(places, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((place) => {
    console.log(place.name);
  });
  mongoose.connection.close();
});
