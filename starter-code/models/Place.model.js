const { Schema, model } = require('mongoose');

const placeSchema = new Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ['Coffee shop', 'bookstore'],
            location: {
                type: {
                    type: String
                },
                coordinates: [Number]
            }

        }
    },
    { timestamps: true }


);
placeSchema.index({ location: '2dsphere' })
//Place.syncIndexes()

module.exports = model('Place', placeSchema)