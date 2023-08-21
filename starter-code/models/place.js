const { Schema, model } = require("mongoose")
const placeSchema = new Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ['coffee shop', 'bookstore']
        },
    },
    { timestamps: true }
)
const Place = model("Place", placeSchema)
module.exports = Place;

