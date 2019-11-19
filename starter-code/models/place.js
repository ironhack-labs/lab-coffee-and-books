const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaPlaces = new Schema({

        name: String,
        type: {
            type: String,
            enum: ['coffee shop', 'bookstore']
        }
    }, {
        timestamps: true
    }

);

const Model = mongoose.model("places", schemaPlaces);
module.exports = Model;