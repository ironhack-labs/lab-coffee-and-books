const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Place", placeSchema);
