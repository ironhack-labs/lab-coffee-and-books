const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'coffee'

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

Place.collection.drop()

const places = {

    name: 'Tu cafecito',
    type: 'coffe shop',
    location: {
        type: 'Point',
        coordinates: [0, 0]

    }

}

Place
    .create(places)
    .then(() => console.log('Se ha creado con exito'))
    .catch(err => console.log('Ha ocurrido un error', err))