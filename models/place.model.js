const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: String, 
    location: {                 // new!
        type: {
            type: String
        },
        coordinates: [Number]
    }
},{
      timestamps: true
})

placeSchema.index({ location: '2dsphere' })        // new!

const Places = mongoose.model('Places', placeSchema)

module.exports = Places