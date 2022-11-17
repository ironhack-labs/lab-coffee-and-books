const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['COFFE SHOP', 'BOOKSTORE'],
            required: true
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    },
    {
        timestamps: true
    });

placeSchema.index({ location: '2dsphere' })

const Places = model("Place", placeSchema);

module.exports = Places;
