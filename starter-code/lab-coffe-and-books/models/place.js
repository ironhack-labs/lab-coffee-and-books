const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  direction: String,
  businesstype: String,
  location: { type: { type: String }, coordinates: [Number] }

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
placeSchema.index({ location: '2dsphere' });

var Place = mongoose.model("Place", placeSchema);
module.exports = Place;