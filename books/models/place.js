const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({

    name: {
        type: String,
        unique: true

    },
    type: {
        type: String,
        enum: ["coffee shop", "bookstore"]
    },

    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
},
    {
        timestamps: {
            type: String,
        }

    })

restaurantSchema.index({ location: '2dsphere' })

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant