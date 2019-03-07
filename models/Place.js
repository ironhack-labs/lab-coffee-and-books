// Object model for the database

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const palceSchema = new Schema(
  {
    name: String,
    type: String,
    timestamp: Date,
    location: {type: String, coordinates: [Number, Number]}
  })

  module.exports = mongoose.model('Place', palceSchema) 