const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  name: {type:String},
  description: {type:String},
  location: {type: {type: String}, coordinates:[Number]},
});

const Coffe = mongoose.model('coffeeshops', coffeeSchema);
module.exports = Coffe;
