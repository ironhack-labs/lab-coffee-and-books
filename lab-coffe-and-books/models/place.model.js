const { Schema, model } = require('mongoose')
const placeSchema = new Schema({

    name: {
        type: String,
    },

    type: {
        type: String,
        enum: ['COFFEESHOP', 'BOOKSTORE']
    },

    location: {

        type: {
            type: String
        },

        coordinates: {
            type: [Number]
        },
    },


})

placeSchema.index({ location: '2dsphere' })

const Place = model("Place", placeSchema);

module.exports = Place;






