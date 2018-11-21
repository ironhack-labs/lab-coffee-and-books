const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const placeSchema = new Schema({
    name: {type: String, unique: true},
    type: {type: String, enum:['coffee shop', 'bookstore']},
    timestamps: true,
    location: { type: { type: String }, coordinates: [Number] }
  });

  placeSchema.index({ location: '2dsphere' });

  module.exports = mongoose.model('place', placeSchema);


