const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const placeSchema = new Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ['coffee shop', 'bookstore'],
            default: 'coffee shop'
        },
        location: {
            type: {
                type: String,
                default: "Point"
            },
            coordinates: [Number]
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    }
);


module.exports = mongoose.model("Place", placeSchema);