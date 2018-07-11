const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    description: String,
    kind: {type: String, enum: ['Book', 'Coffee']},
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
})

placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;