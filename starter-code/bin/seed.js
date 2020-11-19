const mongoose = require('mongoose')
const Place = require('./../models/place')

const dbName = 'coffee-books'

mongoose.connect(`mongodb://localhost/${dbName}`)

const places = [
  {
    name: 'El bar de abajo',
    type: ['coffee shop']
  },
  {
    name: 'Librería Paquita',
    type: ['bookstore']
  },
  {
    name: 'Cafete Ría',
    type: ['coffee shop']
  },
  {
    name: 'LibCoffee',
    type: ['coffee shop', 'bookstore']
  },
  {
    name: 'Líbrame de todo',
    type: ['bookstore']
  },
  {
    name: 'Cafebro',
    type: ['coffee shop', 'bookstore']
  }
]

Place
  .create(places)
  .then(response => {
    console.log(`Se han creado: ${response.length} registros.`)
    mongoose.connection.close()
  })
  .catch(err => console.log('Ha habido un error:', err))