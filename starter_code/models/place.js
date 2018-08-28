const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ["Cafe", "Bookstore"],
        default: "Cafe"
    },
    location: { type: { type: String }, coordinates: [Number] }
});

placeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Place", placeSchema);
