const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placesSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    type: {
      type: String,
      enum: ["Coffee Shop", "Bookstore"],
      require: true
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    },
    image: {
      type: String,
      require: true
    },

  },
  {
    timestamps: true
  }
);

placesSchema.index({ location: '2dsphere' })

const Places = model("Places", placesSchema);

module.exports = Places;
