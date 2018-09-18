const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const palceSchema = new Schema({
    name: String,
    description: String,
    typeOfStore: {type: String, enum: ['Bookstore', 'Coffee shop']},
    location: {
        type: {type: String},
        coordinates: [Number]
    }
});

module.exports = mongoose.model('Place', palceSchema);