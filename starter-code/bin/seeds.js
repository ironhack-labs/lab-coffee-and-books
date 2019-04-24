const mongoose = require('mongoose')
const Place = require('../models/place')

const places = [
  {
    name: 'Starbucks',
    image: 'https://globalassets.starbucks.com/assets/e73c69736dbe40e08d3b179f573fa069.jpg',
    category: 'Coffee shop',
    stars: 5,
    location: {
      coordinates: [-99.1442115, 19.5108066]
    }
  },
  {
    name: 'El Pendulo',
    image: 'http://www.americanethnography.com/travels/wp-content/uploads/2015/07/joaquin-at-pendulo-1800x1197.jpg',
    category: 'Bookstore',
    stars: 4,
    location: {
      coordinates: [-99.152645, 19.4143044] 
    }
  }
]

mongoose.connect('mongodb://localhost/places')
  .then(() => {
    Place.create(places)
      .then(places => {
        console.log(`You created ${places.length} places succesfully`)
        mongoose.connection.close()
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
    console.log(err)
  })

  