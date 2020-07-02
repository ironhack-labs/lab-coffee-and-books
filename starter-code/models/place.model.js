const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['Coffe Shop', 'bookstore'],
    },
    location: {
        lat: { type: Number },
        long: { type: Number }
    }
},
    {timestamps: true})

Place = mongoose.model('Place', placeSchema)

module.exports = Place