const mongoose = require('mongoose')
const Place = require('../models/place')

const dbtitle = 'Coffee&Books'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

const places = [
    {
      name: "Nippon",
      type: "Coffee shop",
      description: "Cafetería estilo cosplay.",
      location: {
       type: "point",
       coordinates: [40.43561, -3.71509]
      }
    },
    {
      name: "Bienvenido a la mansión",
      type: "Coffee shop",
      description: "Cafetería estilo maid&butler-café",
      location: {
       type: "point",
       coordinates: [40.43191, -3.71555]
      }
    },
    {
      name: "Palabras se lleva el viento",
      type: "Bookstore",
      description: "Librería de estilo moderno.",
      location:{
       type: "point",
       coordinates: [40.43325, -3.71526]
      }
    },
    {
      name: "Sala de Seshat",
      type: "Bookstore",
      description: "Librería de estilo antiguo, conservando su decoración desde el siglo XIX",
      location: {
       type: "point",
       coordinates: [40.42822, -3.70040]
      }
    },
]

   Place
    .create(places)
    .then(allPlaces => {
        console.log(`Created ${allPlaces.length} places`)
        mongoose.connection.close()
    })
    .catch((err) => console.log(`An error ocurred: ${err}`)) 