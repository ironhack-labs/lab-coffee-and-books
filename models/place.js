const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// restaurant.js
const placeSchema = new Schema({
    name: String,
    description: String,
    typeOfPlace: {type: String, enum : ['Book', 'Coffee']},
    location: {
        type: {
          type: String,
        },
        coordinates: [Number]
    }
});

placeSchema.index({
    location: '2dsphere'
});


module.exports = mongoose.model('Place', placeSchema);