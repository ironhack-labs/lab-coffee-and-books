const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeeSchema = Schema({

});

const Coffee = mongoose.model('Coffee', CoffeeSchema);

module.exports = Coffee;
