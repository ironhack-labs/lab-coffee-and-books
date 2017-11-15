'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  type: String,
  location: {
    "lat": Number,
    "lng": Number
  }
});

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;
