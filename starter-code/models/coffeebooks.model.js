const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coffeeBooksSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffeeShop', 'bookStore']
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
})

coffeeBooksSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('coffeeBook', coffeeBooksSchema)