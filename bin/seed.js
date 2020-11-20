const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'coffee-books'
mongoose.connect(`mongodb://localhost/${dbName}`)

const places = [
    {
        name: "Toma Café",
        type: "coffee shop",
        location: {
            type: 'Point',
            coordinates: [40.426632, -3.705873]
        }
        
    },
    {
        name: "La Bicicleta",
        type: "coffee shop",
        location: {
            type: 'Point',
            coordinates: [40.423957, - 3.702253]
        }

    }, 
    {
        name: "MÜR Café",
        type: "coffee shop",
        location: {
            type: 'Point',
            coordinates: [40.425885, - 3.712191]
        }
    },
    {
        name: "Arrebato Libros",
        type: "bookstore",
        location: {
            type: 'Point',
            coordinates: [40.426268, -3.703150]
        }
    },
    {
        name: "Libros para un mundo mejor",
        type: "bookstore",
        location: {
            type: 'Point',
            coordinates: [40.425242, - 3.703321]
        }
    }
]

Place
    .create(places)
    .then(allPlacesCreated => {
        console.log(`Created ${allPlacesCreated.length} places`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))