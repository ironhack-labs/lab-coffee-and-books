const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = Schema({
  name: String,
  location: { type: { type: String }, coordinates: [Number] }
});

BooksSchema.index({ location: '2dsphere' });

const Books = mongoose.model('books', BooksSchema);

module.exports = Books;
