const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ['coffee shop', 'bookstore']
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model('Place', placeSchema);