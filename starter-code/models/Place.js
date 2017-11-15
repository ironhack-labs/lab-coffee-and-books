const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const PlaceSchema = new Schema({
  name: {type : String, required: [true, 'Please, insert the name of the stablishment']},
  kind: {type : String, enum:["coffeeShop","bookStore"], default:"coffeeShop", required: [true, 'Please, insert a kind of stablishment']},
  location: { type: { type: String }, coordinates: [Number] }
});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
