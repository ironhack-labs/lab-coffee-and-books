/*jshint esversion:6*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name : String,
  type : String,
  location : {type : { String }, coordinates: [Number]}
});

module.exports = mongoose.model('Place', PlaceSchema);
