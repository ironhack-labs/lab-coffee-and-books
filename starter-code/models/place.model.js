const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String
    },
    type: {
      type: String,
      enum: ['coffe shop', 'bookstore']
    },
    location: {
      type: { type: String },
      coordinates: [Number]
    }
  },
  {

    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
