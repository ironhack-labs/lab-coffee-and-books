const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore'],
        required: true,
    },
    location: {
        type: { type: String },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

coffeSchema.index({ location: '2dsphere' })

const Coffe = mongoose.model("Coffe", coffeSchema)
module.exports = Coffe