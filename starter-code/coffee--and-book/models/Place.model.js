const { Schema, model } = require("mongoose");
const placeSchema = new Schema(
    {
        name: {
            type: String
        },
        type: {
            type: String,
            enum: ['coffe shop', 'bookstore']
        }
    },
    {
        timestamps: true
    }
);






const Place = model("Place", placeSchema);

module.exports = Place;
