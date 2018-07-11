const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
  {
    name: String,
    tipodelugar: {
      type: String,
        enum: ["Bookstore", "Coffeestore"],
        default: "Coffeestore"
    },
    location: {
      type: {
        type: String,
        default: "Point"
      },
      address: String,
      coordinates: [
        {
          type: Number
        }
      ]
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model('Place', placeSchema)