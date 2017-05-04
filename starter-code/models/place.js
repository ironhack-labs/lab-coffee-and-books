/*jshint esversion: 6*/

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var placeSchema   = new Schema({
  name: String,
  type: String,
  location: {
      type: {type: String},
      coordinates: [Number]
  }

});

placeSchema.index({location: '2dsphere'});

module.exports = mongoose.model('Place', placeSchema);
