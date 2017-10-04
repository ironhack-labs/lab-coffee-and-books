const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create place schema

const PlaceSchema = new Schema ({
  name: String,
  description: String,
  establishment: {
    type: String,
    enum: ["Bookstore", "Coffee Shop"],
  },
  location: {type: {type: String}, coordinates: [Number]},
});

PlaceSchema.index({location: '2dsphere'});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
