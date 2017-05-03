const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  location: { type: { type: String }, coordinates: [Number] }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
