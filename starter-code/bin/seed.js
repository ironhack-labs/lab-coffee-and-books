const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'lab-coffe-and-books'

// Connect to DB
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

Place.collection.drop()

const places = {
  name: 'El café',
  type: 'coffe shop',
  location: {
    type: 'Point',
    coordinates: [0, 0]
  }
}

Place
  .create(places)
  .then(() => console.log('Se ha creado el lugar'))
  .catch(err => console.log('Ha ocurrido un error haciendo el see', err))