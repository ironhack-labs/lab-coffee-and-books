const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,

        },
        type: {
            type: String,
            enum: ['coffeShop', 'bookStore'],
            required: true,

        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    },
    {
        timestamps: true,
    }
);

placeSchema.index({ location: '2dsphere' });

module.exports = model('Restaurant', placeSchema);