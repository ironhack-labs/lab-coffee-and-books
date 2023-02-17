const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: false,
            unique: true
        },
        type: {
            type: String,
            required: true,
            enum: ['Coffee shop', 'Bookstore']
        },
        description: {
            type: String,
            trim: true
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
    },
    {
        timestamps: true
    }
);

restaurantSchema.index({ location: '2dsphere' })

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
