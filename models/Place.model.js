const { Schema, model } = require('mongoose')

const placeSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    type: {
          type: String, enum: ['COFFEESHOP', 'BOOKSTORE']
    },
    location: {
        type: {
            type: String
        },
        coordinates: {
            type: [Number]
        }
    },
    
});

// placeSchema.index({ location: '2dsphere' })


const Place = model("Place", placeSchema);
module.exports = Place;


