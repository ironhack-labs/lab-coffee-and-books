const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchameName = new Schema({
  name: String,
  type: { type: String, enum: ["Cofee Shop", "Bookstore"] },
  // timestamps: true
});

const Model = mongoose.model("Place", SchameName);
module.exports = Model;
