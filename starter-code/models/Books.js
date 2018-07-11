const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  name:String,
  location: {
    type:{type: String},
    address: String,
    coordinates:[{type: Number}]
  }
})

module.exports = mongoose.model('Book', booksSchema)