const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlaceSchema = new Schema({
  name: String,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;