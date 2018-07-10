const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    kind: {
        type: String,
        enum : ['coffee', 'book'],
      },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
});

/* restaurantSchema.index({
    location: '2dsphere'
}); */


module.exports = mongoose.model('Place', placeSchema);