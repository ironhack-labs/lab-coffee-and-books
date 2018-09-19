const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  type: {enum: ['coffeePlace, bookStore']},
  description: String,
  location: { type: {type: String}, coordinates: [Number]}
})

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;