const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema ({
    name: String,
    type: String,
    latitude: Number,
    longitude: Number,
}, {
    timestamps: true
})

placeSchema.index({
    location: '2dsphere'
  });
  
  const Place = mongoose.model("Place", placeSchema);
  module.exports = Place;