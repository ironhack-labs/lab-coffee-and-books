const mongoose = require('mongoose')
const Place = require('../model/places.model')

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
  
  const myPlaces = [
    {
      name: 'Magasand',
      typeOfPlace: 'Coffe Shop',
      location: {
        type: 'Point',
        coordinates: [40.421285, -3.687989]
      }
    },
    {
      name: 'Crusto',
      typeOfPlace: 'Coffe Shop',
      location: {
        type: 'Point',
        coordinates: [40.429335, -3.693528]
      }
    },
    {
      name: 'La Central de Callao',
      typeOfPlace: 'Bookstore',
      location: {
        type: 'Point',
        coordinates: [40.419547, -3.704955]
      }
    }
  ]

Place.create(myPlaces)
  .then(() => mongoose.connection.close())
  .catch(err => console.log('Algo pasó con el seed', err))
