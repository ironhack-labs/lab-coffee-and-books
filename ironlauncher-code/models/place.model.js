const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: String,
    type: { enum: ["coffee shop", "bookstore"], type: String },
    location: {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
  },

  {
    timestamps: true,
  }
);

const place = model("place", placeSchema);

placeSchema.index({ location: "2dsphere" });

module.exports = place;
