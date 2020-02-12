const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    type: {type: String,  enum: [`coffee-shop`, `bookstore`]} ,
    location: {lat: Number, lng :Number}
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;