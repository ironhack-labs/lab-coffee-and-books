const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: String,

    type: {
      type: String,
      enum: ["Cofee shop", "Bookstore"]
    },

    location: {
      type: {
        type: String
      },
      coordinates: {
        type: [Number]
      }

    }
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

userSchema.index({ location: '2dsphere' })

const Places = model("Places", userSchema);

module.exports = Places;