const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'lab-coffee-and-books'
mongoose.connect(`mongodb://localhost/${dbName}`)

const places = [
  {
    name: 'ACID Café',
    type: 'Coffee Shop',
    location: {
      type: 'Point',
      coord: [40.411898, -3.6971098]
    }
  },
  {
    name: 'Faraday',
    type: 'Bookstore',
    location: {
      type: 'Point',
      coord: [40.4237986, -3.6985274]
    }
  },
  {
    name: 'Toma Café',
    type: 'Coffee Shop',
    location: {
      type: 'Point',
      coord: [40.4265638, -3.7061916]
    }
  }
]

Place
  .create(places)
  .then(elm => {
    console.log(`Created ${elm.length} places`)
    mongoose.connection.close()
  }).catch(err => new Error(err))