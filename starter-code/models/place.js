const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const PlaceSchema = new Schema({
  name : String,
  type: {
    type: String,
    enum : ['Coffie Shop', 'BookStore'],
  },
  coordinates: {
    lat: String,
    lon: String
  }
},
  {
    timestamps: true
  });

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;