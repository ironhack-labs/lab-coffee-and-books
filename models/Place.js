const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema ({
    name: String,
    kind: {type: String , enum: ["Bookstore","Cafe"] },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    } 
});

placeSchema.index({
    location: '2dsphere'
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;