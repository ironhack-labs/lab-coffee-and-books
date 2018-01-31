const mongoose = require('mongoose');

const bookstoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Bookstore name is required'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    lat: {
        type: Number,
        required: [true, 'Latitude is required']
    },
    lng: {
        type: Number,
        required: [true, 'Longitude is required']
    },
    routes: {
        type: String,
        default: []
    }
}, {
    timestamps: true
});

const Bookstore = mongoose.model('Bookstore', bookstoreSchema);
module.exports = Bookstore;