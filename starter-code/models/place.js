'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = Schema({
  name: String,
  kind: String,
  product: String,
  location: String
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
