const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: String,
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

var Place = mongoose.model("Place", placeSchema);
module.exports = Place