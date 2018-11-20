const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  password: String,
  placeType: {
    type: String,
    enum : ['coffee shop', 'bookstore'],
    // default: 'place'
  },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;