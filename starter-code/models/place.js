const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaPlace = new Schema(
  {
    name: String,
    type: {type: String, enum:["coffee shop", "bookstore"]},
    lat: Number,
    lon: Number
  },
  {
    timestamps: true,
  }
)

const Model = mongoose.model("Place", schemaPlace);
module.exports = Model
