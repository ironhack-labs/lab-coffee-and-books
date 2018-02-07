const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeeSchema = Schema({
  name: String,
  location: { type: { type: String }, coordinates: [Number] }
});

CoffeeSchema.index({location:'2dsphere'});

const Coffee = mongoose.model('coffee', CoffeeSchema);

module.exports = Coffee;
