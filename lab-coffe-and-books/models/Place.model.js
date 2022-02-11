const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
    {
        name: {
            type: String,
        },

        businessClass: {
            type: String,
            enum: ['coffee shop', 'bookstore'],
            default: 'coffee shop',

        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    },
    { timestamps: true }

);
placeSchema.index({location:'2dsphere'})

module.exports = model("Place", placeSchema);

