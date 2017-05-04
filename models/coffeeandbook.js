const mongoose = require('mongoose');

const CoofeeAndBooksSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] },
});
CoofeeAndBooksSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('CoofeeAndBook', CoofeeAndBooksSchema);
