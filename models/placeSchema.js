const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] },
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
mapSchema.index({ location: '2dsphere' });

const place = mongoose.model("point", mapSchema);


module.exports = place;