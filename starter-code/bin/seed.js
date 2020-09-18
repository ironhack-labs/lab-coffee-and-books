require('dotenv').config()

const mongoose = require('mongoose')

const Place = require('../models/place')

mongoose.connect(`mongodb://localhost/${process.env.DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

Place.collection.drop()

const places = [{
    name: 'Book House',
    type: 'bookstore',
    location: {
        type: 'Point',
        coordinates: [0, 0]
    },
}]

Place.create(places)
    .then(allPlaces => console.log(allPlaces.length, 'place/s created!'))
    .catch(err => console.log(err))