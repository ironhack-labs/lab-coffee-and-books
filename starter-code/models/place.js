const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"]
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

placeSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('Place', placeSchema)
