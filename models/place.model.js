const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coffeeSchema = new Schema({
    name: {
        type: String
    },

    type: {
        type: String,
        enum: ['CoffeShop', 'Bookstore'],

    },

},
    { timestamps: true, versionKey: false }
)

coffeeSchema.index({ location: '2dsphere' })

const Coffee = mongoose.model('Coffee', coffeeSchema)

module.exports = Coffee