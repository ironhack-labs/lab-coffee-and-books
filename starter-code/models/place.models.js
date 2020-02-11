const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    required: true,
    enum: ['coffee shop', 'bookstore'],
    default: 'coffee shop',
  },
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: true
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place