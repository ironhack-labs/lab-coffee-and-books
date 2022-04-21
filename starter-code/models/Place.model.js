const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'El nombre es obligatorio']

    },
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore']
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
},
    { timestamps: true }
)

const Place = mongoose.model('Place', placeSchema)
Place.syncIndexes()
module.exports = Place