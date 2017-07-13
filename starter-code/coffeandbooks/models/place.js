const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  location: {
    type: {
      type: String
    },
    cordinates: [Number]
  },

  kind: {
    type: String,
    enum: ['BOOKS', 'COFFEE'],
  },

}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

PlaceSchema.index({ location: '2dsphere' });
const Place = mongoose.model("place", placeSchema);

module.exports = Place;
