const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaPlace = new Schema({
    name: String,
    type: String,
    location: {
        type: {
            type: String,
        },
        coordinates: [Number]
    }
}, {timestamps: true}
)
schemaPlace.index({
    location: "2dsphere"
})

const Place = mongoose.model('place', schemaPlace);


module.exports = Place;