const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['Coffee shop', 'Bookstore']
    },
    description: String,
    location: {
    type: {
      type: String
    },
    coordinates: [Number]
    }
}, {
    timestamps: true
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;