const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: String,
  enum : ['Coffee shop', 'Bookstore'],
 }, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


const Place = mongoose.model('Place', placeSchema);
module.exports = Place;