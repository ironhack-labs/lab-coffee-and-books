'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema ({
    name: String,
    kind: {
        type: String,
        enum: ['Coffee','Books'],
        default: 'Coffee'
    },
    address: String,
    latitude: Number,
    longitude: Number
});

const Place = mongoose.model("Place",placeSchema);

module.exports=Place;
