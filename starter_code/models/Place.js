const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema ({
    name: String,
    placeType: {
        type: String,
        enum: ['Coffee Shop', 'Bookstore'],
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        address: String,
        coordinates: [Number]
    }
})

module.exports = mongoose.model('Place', placeSchema)