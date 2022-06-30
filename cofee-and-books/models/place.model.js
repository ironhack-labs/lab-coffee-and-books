const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        type: {
            type: String,
            enum: ['coffee shop', 'bookstore']
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
        timestamps: true,
    }
);

const User = model("Place", placeSchema);

module.exports = User;
