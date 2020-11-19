const mongoose = require('mongoose')
const Place = require('../models/place')

const dbName = 'coffee&books'
mongoose.connect(`mongodb://localhost/${dbName}`)



const places = [
  {
    name: "Tipos Infames",
    type: "coffee shop",
    location: {
      type: 'Point',
      coordinates: [40.424887, 3.701069]
    }
  },
    {
    name: "La Central",
    type: "coffee shop",
    location: {
      type: 'Point',
      coordinates: [40.419503, -3.705970]
    }
  },


]



Place
    .create(places)
    .then(allPlacesCreated => {
        console.log(`Created ${allPlacesCreated.length} places`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))