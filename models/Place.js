// Object model for the database

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const palceSchema = new Schema(
  {
    name: String,
    type: String,
    timestamp: Number,
    location:  {type: {type: String}, coordinates: [Number]}
  })

  const Place = module.exports = mongoose.model('Place', palceSchema)
