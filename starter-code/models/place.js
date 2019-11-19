const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ['coffe shop', 'bookstore']
    }
  },
  {
    timestamps: true
  }
);

const Model = mongoose.model("Places", schemaName);
module.exports = Model;