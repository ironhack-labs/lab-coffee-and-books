// bin/seed.js

const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'coffee-books'
mongoose.connect(`mongodb://localhost/${dbName}`)


const places = [
    {
        name: 'Celicioso',
        type: 'coffee shop'
    },
    {
        name: 'Pancomido Cafe',
        type: 'coffee shop'
    },
    {
        name: 'Libros Retiro',
        type: 'bookstore'
    },
    {
        name: 'Cafe y Te',
        type: 'coffee shop'
    }
]



Place
    .create(places)
    .then(allPlacesCreated => {
        console.log(`Created ${allPlacesCreated.length} places`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error,', err))
