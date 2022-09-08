const { Schema, model } = require("mongoose");

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['coffeeshop', 'bookstore'],
      required: true,
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true
  }
);

placeSchema.index({ location: '2dsphere' });

const Place = model('Place', placeSchema);

module.exports = Place




