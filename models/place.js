const mongoose = require("mongoose")

const placeSchema = new mongoose.Schema({
    name: String,
    type: ["Coffee-shop", "Bookstore"],
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
});

placeSchema.index({location: "2dsphere"})

const Places = mongoose.model("Places", placeSchema)

module.exports = Places;