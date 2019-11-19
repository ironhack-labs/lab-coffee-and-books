const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {
        type: String,
        required : true,
        unique : true
    },
    type: {
        type: String,
        required : true,
        enum: [
            "Coffee Shop",
            "Bookstore"
        ],
    },
    location: { type: { type: String }, coordinates: [Number] }

},  {
        timestamps: true
    }
)

const placeModel = mongoose.model("places", placeSchema);
module.exports = placeModel;