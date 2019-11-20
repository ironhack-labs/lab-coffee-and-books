const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    type: String,
},

 {
    timestamps: { timestamps: true }
});

const place = mongoose.model("place", placeSchema);

module.exports = place