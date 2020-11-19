const mongoose = require('mongoose')
const Place = require('../models/place')

const dbName = 'coffe-books'
mongoose.connect(`mongodb://localhost/${dbName}`)


// -----  PLACE SEEDS -----
const places = [
  {
    name: 'Starbucks Toledo',
    type: 'coffee shop',
    location: {
      type: 'Point',
      coordinates: [39.859256, -4.022213]
    }
  },
  {
    name: 'Brunch Santo Tomé',
    type: 'coffee shop',
    location: {
      type: 'Point',
      coordinates: [39.881777, -4.032335]
    }
  },
  {
    name: 'Librería Hojablanca',
    type: 'bookstore',
    location: {
      type: 'Point',
      coordinates: [39.858187, -4.023283]
    }
  },
  {
    name: 'Casa de Carlos',
    type: 'coffee shop',
    location: {
      type: 'Point',
      coordinates: [39.883183, -4.041884]
    }
  }
]

Place
  .create(places)
  .then(allPlacesCreated => {
    console.log(`Created ${allPlacesCreated.length} places`)
    mongoose.connection.close()
  })
  .catch(err => next(new Error(err)))
