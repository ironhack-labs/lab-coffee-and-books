const mongoose = require('mongoose')
const Place = require('./../models/place')

const dbTitle = 'coffee-and-books'
mongoose.connect(`mongodb://localhost/${dbTitle}`)

const places = [
  { name: 'Torch Coffee Roasters', type: 'coffee shop' },
  { name: 'Ofelia Bakery', type: 'coffee shop' },
  { name: 'La Crème de la Crème', type: 'coffee shop' },
  { name: 'La Cacharrería', type: 'coffee shop' },
  { name: 'Café de Mayo', type: 'coffee shop' },
  { name: 'Caótica', type: 'bookstore' },
  { name: 'La Fuga', type: 'bookstore' },
  { name: 'Casa Tomada', type: 'bookstore' },
  { name: 'Un Gato en Bicicleta', type: 'bookstore' },
  { name: 'Librería Reguera', type: 'bookstore' },
]

Place.create(places)
  .then((places) => {
    console.log(`${places.length} place entries created!`)
    mongoose.connection.close()
  })
  .catch((err) => {
    console.log(`An error occurred upon seeding the database: ${err}`)
  })
