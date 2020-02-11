const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  location: { lat: Number, lng: Number },
  type: { type: String, enum: ["coffee-shop", "bookstore"] }
}, {
  timestamps: true
});
userSchema.index({ location: '2dsphere' });
const Place = mongoose.model("Place", userSchema);
module.exports = Place;