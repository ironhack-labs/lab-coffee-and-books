const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {type: String}, enum: ['coffe shop','book store'],
  location: {
    coordinates: [Number]
  }},{
    timestamps: true 
})

placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;