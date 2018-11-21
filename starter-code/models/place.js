const mongoose = require('mongoose');
const schema = mongoose.Schema;
const placeSchema = new schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['coffee shop', 'bookstore'],
  },
  location: {
    lat: { type: String },
    lng: { type: String },
}
});

placeSchema.index({ location: '2dsphere' });
 const Place = mongoose.model('Place', placeSchema);
 module.exports = Place;