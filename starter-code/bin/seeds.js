require('dotenv').config();

const mongoose = require('mongoose')
const Place = require('../models/Place')

const places = [
  {
    name: 'El Pendulo',
    image: 'https://picsum.photos/400/300',
    category: 'Café',
    starts: 3,
    location: {
      coordinates: [-99.1542909, 19.4389896]
    }
  },
  {
    name: 'El Sotano',
    image: 'https://picsum.photos/400/300',
    category: 'Library',
    starts: 3,
    location: {
      coordinates: [-99.1542909, 19.4369358]
    }
  },
  {
    name: 'Garat',
    image: 'https://picsum.photos/400/300',
    category: 'Café',
    starts: 3,
    location: {
      coordinates: [-99.1323144, 19.4325358]
    }
  }
]

mongoose
  .connect(process.env.DB)
  .then(() => {
    Place.create(places)
      .then(places => {
        console.log(`You've created ${places.length} places succesfully`)
        mongoose.connection.close()
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
