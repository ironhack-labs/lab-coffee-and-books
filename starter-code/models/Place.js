const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  location: {
    lat: Number,
    lng: Number
  },
  kind: { 
    type: String, 
    enum: ['Coffee', 'Books'] 
  }
});

const Place = mongoose.model("Place", PlaceSchema);
module.exports = Place;
