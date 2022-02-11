const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,


    },
    businessType: {
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
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);


userSchema.index({ location: '2dsphere' });

const User = model("User", userSchema);

module.exports = User;
