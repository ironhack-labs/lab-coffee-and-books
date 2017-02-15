const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const CoffeeSchema = new Schema({
  name: String,
    description: String,
    location: { type: { type: String }, coordinates: [Number] }
  });
  CoffeeSchema.index({ location: '2dsphere' });

const Coffee = mongoose.model("Coffee", CoffeeSchema);
module.exports = Coffee;
