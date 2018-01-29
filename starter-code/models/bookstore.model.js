const mongoose = require('mongoose');

const bookstoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Bookstore name is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    location: { type: { type: String }, coordinates: [Number] }
    ,
    routes: {
        type: String,
        default: []
    }
}, {
    timestamps: true
});

const Bookstore = mongoose.model('Bookstore', bookstoreSchema);
module.exports = Bookstore;