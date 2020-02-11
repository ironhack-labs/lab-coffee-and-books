const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: ['coffee shop', 'bookstore'],
  date: { type: Date, default: Date.now },
  location: { type: { type: String }, coordinates: [Number] }
})

placeSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('Place', placeSchema)