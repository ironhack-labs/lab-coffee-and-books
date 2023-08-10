
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        type: {
            type: String,
            enum: ["coffee shop", "bookstore"],
            required: true,
            trim: true
        },
        location: {
            type: {
                type: String
            },
            coordinates: {
                type: [Number]
            }
        }
    },
    {
        timestamps: true
    }
);

userSchema.index({ location: '2dsphere' })

const Place = model("Place", userSchema);

module.exports = Place;
