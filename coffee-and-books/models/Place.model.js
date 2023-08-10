const { Schema, model } = require("mongoose");

const placeSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
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

},

    {
        timestamps: true
    }

);

const Place = model("Place", placeSchema);

module.exports = Place;