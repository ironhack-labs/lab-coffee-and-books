const mongoose = require("mongoose");

const bookstoreSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
bookstoreSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Bookstore", bookstoreSchema);
