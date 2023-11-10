const { Schema, model } = require("mongoose")

const placeSchema = new Schema({

    name: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        enum: ["coffee shop", "bookstore"],
    },
    location: {
        type: {
            type: String,
        },
        coordinates: {
            type: [Number],
        }
    }
},

    { timestamps: true }

)


const Places = model("Places", placeSchema)

module.exports = Places