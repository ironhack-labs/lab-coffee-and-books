const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
    {
        name: String,
        type: { type: String, enum: ['Coffee shop', 'Bookstore'] },
        location: {lat: Number, lng: Number},
        img: String,
        imgtitle: String
    },
    {
        timestamps: true
    }
)

const Model = mongoose.model("place", schemaName);
module.exports = Model;