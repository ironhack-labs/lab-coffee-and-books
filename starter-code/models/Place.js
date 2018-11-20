const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['COFFEE SHOP', 'BOOKSTORE']
  }, 
  location: { 
    lat: {type: Number}, 
    lng: {type: Number}
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
}
});

module.exports = mongoose.model('Place', placeSchema);