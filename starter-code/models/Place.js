const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    category: {
      type: String,
      enum: ["Bar", "Restaurant", "Coffee"]
    },
    stars: {
      type: Number,
      min: 1,
      max: 5
    },
    location: {
      address: {
        type: String,
        default: "Point"
      },
      coordenates: [Number]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Place', placeSchema)

