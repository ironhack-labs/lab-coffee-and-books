const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  type: String,
  name: String,
  location : {
    lat: Number,
    lng: Number
  }
});

var Place = mongoose.model("Place", placeSchema);
module.exports = Place;
