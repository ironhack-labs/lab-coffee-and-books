const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
    name: String,
    location: { type: { type: String }, coordinates: [Number] },
    type: {
        type: String,
        enum: ["Coffe shop", "Bookstore"]
    }
}, {
    timestamps: true
});
placesSchema.index({ location: '2dsphere' });

const Place = mongoose.model("Place", placesSchema);

module.exports = Place;