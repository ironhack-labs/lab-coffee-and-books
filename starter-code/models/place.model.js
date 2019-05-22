const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ["coffee-shop", "book-store"]
    },
    location: {
        type: { type: String },
        coordinates: [Number]
    }
},{timestamps:true})

placeSchema.index({ location: '2dsphere' })

const place = mongoose.model("place", placeSchema);

module.exports = place;