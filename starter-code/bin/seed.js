const mongoose = require('mongoose')
const Place =require('../models/place-model')

const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const places = [
  {
    name: 'Coffee and Kicks',
    type: 'coffee shop',
    location: {
      type: 'Point',
      coordinates: [40.419244, -3.706610]
    }
  },
  {
    name: 'Coffee Station',
    type: 'coffee shop',
    location: {
      type: 'Point',
      coordinates: [40.434462, -3.719640]
    }
  },
  {
    name: 'La casa del libro',
    type: 'bookstore',
    location: {
      type: 'Point',
      coordinates: [40.419913, -3.703308]
    }
  },
  {
    name: 'Books Center Librerías',
    type: 'bookstore',
    location: {
      type: 'Point',
      coordinates: [40.429409, -3.701218]
    }
  }
]

Place.create(places)
.then(allPlaces => {
  console.log(`${allPlaces} created`)
  mongoose.connection.close()
})
.catch(err => console.log(`An error ocurred: ${err}`))