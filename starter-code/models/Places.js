const mongoose = require("mongoose")
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ["coffee", "bookstore"], required: true }
}, {
    timestamps: true
  })

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;