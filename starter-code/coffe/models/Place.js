const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlaceSchema = new Schema({
  username: String,
  location: String
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Place', PlaceSchema)
