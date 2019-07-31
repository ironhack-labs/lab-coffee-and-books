const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PlaceModel = new Schema({

    name: String,
    enum: ['COFEE', 'BOOKSTORE'],

}, {
        timestamps: true
    })








restaurantSchema.index({ location: '2dsphere' })

const PlaceModel = mongoose.model("PlaceModel", userSchema)

module.exports = PlaceModel