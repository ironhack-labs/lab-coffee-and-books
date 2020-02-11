const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchameName = new Schema(
  {
    name: String,
    type: { type: String, enum: ["Cofee Shop", "Bookstore"] },
    positionlat: { type: String, default: 40.4110018 },
    positionlng: { type: String, default: -3.7070343 }
    // map: map
    // timestamps: true
  },
  {
    timestamps: true
  }
);

const Model = mongoose.model("Place", SchameName);
module.exports = Model;
