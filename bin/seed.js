const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'Lab-coffee-and-books'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const places = [{

    name: 'Librería Madrid',
    type: 'bookstore',
    location: {
        type: 'Point',
        coordinates: { lat: 40.4100211, lng: -3.6982763 }
    }
}, {

    name: 'La Central de Callao',
    type: 'coffee',
    location: {
        type: 'Point',
        coordinates: { lat: 40.4100211, lng: -3.7164081 }
    }
}]

Place
    .create(places)
    .then(data => {
        console.log(`Se han creado ${data.length} nuevos lugares en tu BBDD`)
        mongoose.connection.close()
    })
    .catch(err => console.log('HUBO UN ERROR AL CARGAR LOS NUEVOS SITIOS', err))