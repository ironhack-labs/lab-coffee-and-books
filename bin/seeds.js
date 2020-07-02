const mongoose = require('mongoose')
const Place = require('../models/place.model')

mongoose.connect('mongodb://localhost/coffee-and-books')
Place.collection.drop()

const places = [{
    name: 'El Negro Café',
    location: {
        type: 'coffee shop'
    }

}, {
    name: 'El librito dichoso',
    location: {
        type: 'bookstore'
    }
}]

// Seed
Place.create(places)
    .then(allPlaces => {
        console.log(`Created ${allPlaces.length} places`)
        mongoose.connection.close()
    })
    .catch(err => next(err))