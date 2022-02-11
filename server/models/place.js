const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ['coffee shop', 'bookstore'],

        },
    },

    {

        timestamps: true,
    }
);

const place = model("Place", placeSchema);
place.syncIndexes();
module.exports = place;
