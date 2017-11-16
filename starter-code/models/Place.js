const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  position: {
   	lat: Number,
   	lng: Number
   },
   title: String,
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
