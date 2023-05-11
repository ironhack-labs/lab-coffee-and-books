const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        type: {
            type: String,
            enum: ['coffee shop', 'bookstore'],
            required: true,
            lowercase: true,
            trim: true
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const Place = model("Place", placeSchema);

module.exports = Place;
