const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// coffeebook.js
const coffeebookSchema = new Schema({
    name: String,
    description: String,
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
});

coffeebookSchema.index({
    location: '2dsphere'
});


module.exports = mongoose.model('CoffeeBook', coffeebookSchema);