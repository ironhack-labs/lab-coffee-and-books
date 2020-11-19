// bin/seed.js

const mongoose = require('mongoose')
const Places = require('../models/place.model')

const dbName = 'coffeAndBooks'
mongoose.connect(`mongodb://localhost/${dbName}`)

const places = [
   
    {
        name: "The Good Coffee ",
        type: "coffee shop",
    }
]

Places
    .create(places)
    .then(allPlacesCreated => {
        console.log(`Created ${allPlacesCreated.length} places`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))