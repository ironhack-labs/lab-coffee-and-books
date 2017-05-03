/*jshint esversion: 6*/
const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const LibrarySchema = new Schema({
  name: String,
  description: String,
  location: {type: {type: String }, coordinates: [Number]}
});

module.exports = mongoose.model('Library', LibrarySchema);
