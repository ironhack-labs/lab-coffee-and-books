const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: String,
    password: String,
    role: {
        type: String,
        enum: ['coffee shop', 'bookstore'],
    
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = PlaceSchema;