const mongoose = require('mongoose');

const CoofeeAndBooksSchema = new mongoose.Schema({
  name: String,
  description: String,
  business: {
    type: String,
    enum: ['BOOKSTORE', 'COFFEESHOP'],
  },
  location: { type: { type: String }, coordinates: [Number] },
});
CoofeeAndBooksSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('CoofeeAndBook', CoofeeAndBooksSchema);
