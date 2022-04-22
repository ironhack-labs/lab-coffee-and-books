const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        type: {
            type: String,
            enum: ['coffeeShop', 'bookStore']
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    },

    { timestamps: true, }
)

placeSchema.index({ location: '2dsphere' })

const Places = model("Places", placeSchema);

module.exports = Places;
