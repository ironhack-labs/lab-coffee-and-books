const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,

    },
    password: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;