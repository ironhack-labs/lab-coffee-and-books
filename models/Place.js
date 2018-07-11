const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: String,
    kindOfPlace: String,
    location: {
        type: {
            type: String,
        },
        coordinates: [Number]
    }
});

PlaceSchema.index({
    location: '2dsphere'
});

module.exports = mongoose.model('Place', PlaceSchema);