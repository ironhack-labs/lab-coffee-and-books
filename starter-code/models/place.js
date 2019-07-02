const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    type: { name: string, enum: ["coffe shop", "bookstore"] },
    timestamps: true
});

placeSchema.index({ location: '2dsphere' });

const Model = mongoose.model('coffeandbooks', restaurantSchema);
module.exports = Model;