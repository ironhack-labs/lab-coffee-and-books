const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema ({
  name: {type: String, required: true},
  description: String,
  location: {
    type: {type: String},
    coordinates: [Number]
    }
  }
);

const CoffeeStore = mongoose.model('CoffeeStore', coffeeSchema);
module.exports = CoffeeStore;