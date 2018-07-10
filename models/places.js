const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// restaurant.js
const placesSchema = new Schema({
    name: String,
    description: String,
    class: String,
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
});

placesSchema.index({
    location: '2dsphere'
});


module.exports = mongoose.model('Places', placesSchema);