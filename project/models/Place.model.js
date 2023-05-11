const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        type: {
            type: String,
            Enum: ['coffee shop', 'bookstore'],
        },
        location: {
            type: { type: String },
            coordinates: [Number]
        }

    },
    {

        timestamps: true
    }
);

module.exports = model('Place', placeSchema)