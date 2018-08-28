const mongoose = require('mongoose')
const Schema = mongoose.Schema

const climbingSchema = new Schema({
    name: String,
    location: {
        lat: Number,
        lng: Number
    }
})

module.exports = mongoose.model('Climbing', climbingSchema)
