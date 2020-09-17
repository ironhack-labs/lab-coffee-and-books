const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema( {
    name: {type: String, required: true},
    type: {type: String, enum: ['cofee shop', 'bookstore']},
    coordinates:{
        lat: Number,
        lng: Number
    }
}, {
    timestamps: true
}) 

const Place = mongoose.model('Place', placeSchema)

module.exports = Place