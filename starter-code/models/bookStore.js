const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
  name: {type: String, required: true},
  description: String,
  location: {
    type: {type: String},
    coordinates: [Number]
    }
  }
);

const BookStore = mongoose.model('BookStore', bookSchema);
module.exports = BookStore;