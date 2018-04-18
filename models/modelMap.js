const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const modelMapSchema = new Schema({
    title: String,
    position: { type: { type: String }, coordinates: [Number] }
});

const modelMap = mongoose.model("User", modelMapSchema);

module.exports = modelMap;