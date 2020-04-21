const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
    name: String,
    type: String,
    location: { type: { type: String }, coordinates: [Number] }
}, {
    timestamps: true
});
placesSchema.index({ location: '2dsphere' });

const Places = mongoose.model("Lugares", placesSchema);
module.exports = Places;
