const mongoose = require('mongoose')
const Schema = mongoose.Schema


const placeSchema = new Schema({
  name: {type: String, unique: true, required: true},
  description: String,
  kind: {type: String, enum: ['Books', 'Coffee']},
  location: {
    type: {type: String, default: 'Point'},
    coordinates: [Number]
  }
})

placeSchema.index({location: '2dsphere'});

module.exports = mongoose.model('Place', placeSchema)
