const mongoose = require("mongoose")

const placeSchema = new mongoose.Schema({
  name: String,
  kind: {
    type: String,
    enum: ["Coffee Shop", "Bookstore"]
  },
  coordinates: {
    type: [Number],
    required: true
  }
})

placeSchema.index({
  location: '2dsphere'
});

const Place = mongoose.model("place", placeSchema)

module.exports = Place