const mongoose = require('mongoose')
const Place = require('../models/Place')

const places = [
  {
    name: 'Centro de Salud',
    image: 'https://media.timeout.com/images/103957327/630/472/image.jpg',
    category: 'Bar',
    stars: 3,
    location: {
      //Primero se pone longitud, luego latitud. Es al reves de como esta en google maps
      coordinates: [-99.163708, 19.416370]
    }
  },
  {
    name: 'Orinoco',
    image: 'https://img.chilango.com/2017/10/tacos-orinoco.jpg',
    category: 'Restaurant',
    stars: 4,
    location: {
      //Primero se pone longitud, luego latitud. Es al reves de como esta en google maps
      coordinates: [-99.1670987, 19.4176724]
    }
  },
  {
    name: 'Mataleón',
    image: 'http://cdn.mexiconewsnetwork.com/uploads/images/16774mataleon3.jpg',
    category: 'Restaurant',
    stars: 5,
    location: {
      //Primero se pone longitud, luego latitud. Es al reves de como esta en google maps
      coordinates: [-99.1678488, 19.4202721]
    }
  }
]

mongoose
.connect('mongodb://localhost/lugares-mamadores')
.then(() => {
  Place.create(places)
  .then(places => {
    console.log(`You created ${places.length} places successfully`)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
})
.catch(err => {
  console.log(err)
})

