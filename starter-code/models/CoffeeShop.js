const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CoffeeShopSchema = new Schema({
  name: String,
  location: { type: { type: String }, coordinates: [Number] }
});

const CoffeeShop = mongoose.model('CoffeeShop', CoffeeShopSchema);
module.exports = CoffeeShop;
