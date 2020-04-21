const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesSchema = new Schema({
    name: String,
    description: {
        type: String,
        enum: ["coffee shop", "bookstore"]
    },
    location: {
        type: { type: String }, coordinates: [Number]
    }
});

placesSchema.index({ location: '2dsphere' });

const Place = mongoose.model("place", placesSchema)

module.exports = Place