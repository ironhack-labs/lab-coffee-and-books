const mongoose = require('mongoose')

const dbName = 'lab-coffee-books'
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})

const Place = require('../models/place.model')

const places = [
    {
        name: 'Starbucks',
        type: 'Coffee shop', 
        location: {
            type: 'Point',
            coordinates: [40.417334, -3.706076]
        }
    },
    {
        name: 'La Central',
        type: 'Book shop',
        location: {
            type: 'Point',
            coordinates: [40.419854, -3.705776]
        }
    },
    {
        name: 'Libros olvidados',
        type: 'Book shop',
        location: {
            type: 'Point',
            coordinates: [40.419052, -3.702221]
        }
    },
    {
        name: 'Café cielo',
        type: 'Coffee shop',
        location: {
            type: 'Point',
            coordinates: [40.420833, -3.697518]
        }
    }
]

mongoose.connection.collections['places'].drop()

Place.create(places)
    .then(placesCreated => console.log('Se han creado ', placesCreated.length, ' places en la BD'))
    .catch(err => console.log('Error! ', err))