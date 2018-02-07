const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  type: String,
  name: String,
  location : {
    lat: String,
    lng: String
  }
});

var Place = mongoose.model("Place", placeSchema);
module.exports = Place;
