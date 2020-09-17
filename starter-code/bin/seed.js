const mongoose = require("mongoose")
const dbname = 'COFFE_&_BOOKS'

mongoose.connect(`mongodb://localhost/${dbname}`)

const Place = require('../models/place.model')

const place = [
    {
    name: 'Cañones de Navarone',
    location: {
        type: 'Point',
        coordinates: [-3.698214, 40.392499]
    },
    type: 'coffe shop'
    },
    {
        name: 'Prados verdes',
        location: {
            type: 'Point',
            coordinates: [-3.898214, 40.392499]
        },
        type: 'coffe shop'
    }
]

Place.create(place)
.then(all => console.log('------La base de datos se ha creado correctamente ------=>', all))
.catch(err => console.log(err))