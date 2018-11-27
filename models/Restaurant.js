const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restSchema = new Schema(
  {
    name: String,
    location: {
      type: {
        type: String,
        default: "Point"
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
);

module.exports = mongoose.model("Restaurant", restSchema);
