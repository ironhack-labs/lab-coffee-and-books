const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: String,
  location: { type: { type: String }, coordinates: [Number] },
  kind: {
    type: String,
    enum : ['Bookstores', 'Coffeshop'],
  }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
