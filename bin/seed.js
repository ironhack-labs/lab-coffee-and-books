const mongoose = require('mongoose')
const Book = require('../models/place.model')

const dbName = 'Lab-coffee-and-books'
mongoose.connect(`mongodb://localhost/${dbName}`)


const places = [
    {
        name: "Café calentito",
        type: "coffee shop",
        location: {
            type: 'Point',
            coordinates: [40.426569, -3.695074]
        }
    },
    {
        name: "AMAZBOOK",
        type: "bookstore",
        location: {
            type: 'Point',
            coordinates: [40.423727, -3.696501]
        }
    },
    {
        name: "Cafelatte",
        type: "coffee shop",
        location: {
            type: 'Point',
            coordinates: [40.425295, -3.699591]
        }
    },
    {
        name: "Libros y más allá",
        type: "bookstore",
        location: {
            type: 'Point',
            coordinates: [40.427353, -3.699516]
        }
    }]




Book
    .create(places)
    .then(allPlacesCreated => {
        console.log(`Created ${allPlacesCreated.length} books`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))