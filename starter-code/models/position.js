const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    name: String,
    lat: String,
    lng: String
});

const Pos = mongoose.model('Pos',positionSchema);
module.exports = Pos;