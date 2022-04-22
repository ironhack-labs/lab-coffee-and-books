const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema(
    {
        placeName: { type: String, required: true },
        type: {
            type: String,
            enum: ["coffeshop", "bookstore"],
        },

        location: {
            type: {
                type: String,
            },
            coordinates: [Number],
        },
    },
    {
        timestamps: true,
    }
);

const Place = model("Place", placeSchema);

Place.syncIndexes()

module.exports = Place;
