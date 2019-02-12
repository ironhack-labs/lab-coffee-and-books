const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  desc: String,
  placeType: String, enum: [ "Coffee", "Books"],
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;