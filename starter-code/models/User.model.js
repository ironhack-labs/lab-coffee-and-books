const { Schema, model, SchemaTypeOptions } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const restaurantSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["coffeShop", "bookstore"]
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

restaurantSchema.index({ location: '2dsphere' })


const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
