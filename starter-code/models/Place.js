/* jshint esversion: 6, node: true */

const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    kind: {
        type: String,
        enum: ['coffee', 'books'],
        required: true
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
});
placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model('places', placeSchema);
module.exports = Place;
