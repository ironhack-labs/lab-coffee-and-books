const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesSchema = new Schema({
    name: String,
    type: { type: [String] },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }//closes location
}, 
     { timestamps: true 
})

placesSchema.index({
    location: '2dsphere'
  })

const Place = mongoose.model("Place", placesSchema);

module.exports = Place;
