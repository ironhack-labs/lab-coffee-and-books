const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CoffeeshopSchema = new Schema({
  name  : String,
  description : Number,
  location : {type: {type: String}, coordinates: [Number]}
});

CoffeeshopSchema.index({location: '2dsphere'});

const Coffeeshop = mongoose.model('Coffeeshop', CoffeeshopSchema);
module.exports = Coffeeshop;
