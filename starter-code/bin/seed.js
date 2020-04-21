const mongoose = require('mongoose');
const Place = require('../models/place');


const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
Place.collection.drop()

const places = [
    {
        name: "Hola Coffe",
        location: {
            type: "Point",
            coordinates: [41.566230, -2.1749801]
        },
        type: "Coffe shop"
    },
    {
        name: "Adiós Coffe",
        location: {
            type: "Point",
            coordinates: [41.766230, -2.1749801]
        },
        type: "Coffe shop"
    },
    {
        name: "Hola bookstore",
        location: {
            type: "Point",
            coordinates: [41.928830, -2.1749801]
        },
        type: "Bookstore"
    },
    {
        name: "Adiós bookstore",
        location: {
            type: "Point",
            coordinates: [41.346230, -2.1749801]
        },
        type: "Bookstore"
    }
]

Place.create(places)
    .then(allThePlaces => {
        console.log(`${allThePlaces.length} places created!`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred: ${err}`))