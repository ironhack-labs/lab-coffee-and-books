const mongoose = require('mongoose')

const dbName = 'lab-coffee-books'
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})

const Place = require('../models/place.model')

const places = [
    {
        name: 'La Manon Bernabéu',
        type: 'Coffee shop', 
        location: {
            type: 'Point',
            coordinates: [40.450658, -3.689061]
        }
  },
  {
        name: 'Cafeteria Don Gil',
        type: 'Coffee shop', 
        location: {
            type: 'Point',
            coordinates: [40.448858, -3.690350]
        }
  },
  {
        name: '105 Cafeteria',
        type: 'Coffee shop', 
        location: {
            type: 'Point',
            coordinates: [40.454465, -3.690988]
        }
    },
  {
      name: 'Casa del Libro',
      type: 'Book shop',
      location: {
          type: 'Point',
          coordinates: [40.448477, -3.695580]
      }
  },
  {
      name: 'Librería Lé',
      type: 'Book shop',
      location: {
          type: 'Point',
          coordinates: [40.456325, -3.689656]
      }
  },
  {
      name: 'Librería Alemana Auryn',
      type: 'Coffee shop',
      location: {
          type: 'Point',
          coordinates: [40.450206, -3.678569]
      }
  }
]

mongoose.connection.collections['places'].drop()

Place.create(places)
    .then(placesCreated => console.log('Se han creado ', placesCreated.length, ' places en la BD'))
    .catch(err => console.log('Error! ', err)) 