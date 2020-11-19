const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore']
    }, location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
},
    {
        timestamps: true
    })

placeSchema.index({ location: '2dsphere' })

const Places = mongoose.model('Places', placeSchema)

module.exports = Places