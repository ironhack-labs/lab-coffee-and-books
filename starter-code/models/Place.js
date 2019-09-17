const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: { type: { type: String }, coordinates: [Number] },
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore']
  },
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete doc._id;
      delete ret.__v;
      return ret;
    },
  },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
