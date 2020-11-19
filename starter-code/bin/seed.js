const mongoose = require('mongoose')
const Place = require('../models/place.model')
const dbName = 'coffeeAndBooks'
mongoose.connect(`mongodb://localhost/${dbName}`)

const places = [
      {
          name: "La librería",
          type: "Book shop",
          location: {
            type: 'Point',
            coordinates: [40.415582, -3.711642]
        }
      },
      {
        name: "Tipos Infames",
        type: "Book shop",
        location: {
          type: 'Point',
          coordinates: [40.424859, -3.701144]
      }
      },
      {
        name: "Panta Rhei",
        type: "Book shop",
        location: {
          type: 'Point',
          coordinates: [40.423724, -3.700014]
      }
    },
      {
        name: "Hanso Cafe",
        type: "Coffee shop",
        location: {
          type: 'Point',
          coordinates: [40.424057, -3.705451]
      }
    },
      {
        name: "Mision Cafe",
        type: "Coffee shop",
        location: {
          type: 'Point',
          coordinates: [40.424453, -3.708818]
      }
    },
      {
        name: "Toma Cafe",
        type: "Coffee shop",
        location: {
          type: 'Point',
          coordinates: [40.424493, -3.708796]
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
  
    