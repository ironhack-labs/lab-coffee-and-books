// models/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    position:[
    lat= Number,
    lng= Number],
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore'],
        // default: 'TA'
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Place = mongoose.model("Place", userSchema);

module.exports = Place;

