const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  type: ["Coffe","BookShop"],
  location: { lat: Number, lng: Number }
});
const Place = mongoose.model("Place", placeSchema);
module.exports = Place;