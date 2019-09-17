const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"]
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete doc._id;
        delete doc.__v;
        return ret;
      }
    }
  }
);

const Places = mongoose.model("Places", placesSchema)

module.exports = Places
