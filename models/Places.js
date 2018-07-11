const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  place: { type: String, enum: ["coffee", "book"] },
  location: { type: { type: String }, coordinates: [Number] }
});


const places = mongoose.model("places", placeSchema);

module.exports = places;
