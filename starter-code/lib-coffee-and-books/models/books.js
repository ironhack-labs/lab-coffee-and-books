const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
    description: String,
    location: { type: { type: String }, coordinates: [Number] }
  });
  BookSchema.index({ location: '2dsphere' });

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
