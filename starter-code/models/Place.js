const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore'],
    required: true
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  },
  timestamps: {
    type: Date,
    default:Date.now,
    required: true
  }
});


const Place = mongoose.model("User", placeSchema);
module.exports = Place;