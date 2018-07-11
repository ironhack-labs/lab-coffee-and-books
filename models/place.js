const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// restaurant.js
const placeSchema = new Schema({
    name: String,
    description: String,
    whatplace: { type: String, enum: ["Books", "Coffee"]},
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