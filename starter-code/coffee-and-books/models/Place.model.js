const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ['coffee shop', 'bookstore']
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

const Place = mongoose.model('Place', placeSchema)
Place.syncIndexes()  // al modificar el modelo, hay que hacer un drop de la BBDD, borrarla y volverla a crear, o esto, para que no haya problemas
module.exports = Place