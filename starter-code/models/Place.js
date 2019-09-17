const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    type: {
      type: String,
      enum: ['COFFEE SHOP', 'BOOKSTORE']
    },
    address: String,
    location: {
      type: { type: String, default: "Point" },
      coordinates: [Number]
    },
  }, {
    timestamps: true
  });

placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;