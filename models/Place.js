const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    kind: String,
    location: {
        type: { type: String },
        coordinates: [Number]
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

//¿sí?
placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;