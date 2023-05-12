const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String
    },
    location: {
      type: {
        type: String,
      },
      coordinates: [Number]
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

placeSchema.index({ location: '2dsphere' })

const Place = model("Place", placeSchema);

module.exports = Place;
