const { Schema, model, SchemaTypes } = require('mongoose')

const placeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore'],
        required: true
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
},
    {
        timestamps: true
    }
)

placeSchema.index({ location: '2dsphere' })
module.exports = model('Place', placeSchema)