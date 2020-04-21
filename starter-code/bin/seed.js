const mongoose = require('mongoose')
const Place = require('../models/Place.model')

const dbTitle = 'coffee-and-books'
mongoose.connect(`mongodb://localhost/${dbTitle}`)

const places = [
  {
    name: 'Torch Coffee Roasters',
    type: 'coffee shop',
    address: 'Ave. Paseo de las Delicias, 3, 41001 Sevilla',
  },
  {
    name: 'Ofelia Bakery',
    type: 'coffee shop',
    address: 'C. Huelva, 5, 41004 Sevilla',
  },
  {
    name: 'La Crème de la Crème',
    type: 'coffee shop',
    address: 'Calle Regina, 1, 41003 Sevilla',
  },
  {
    name: 'La Cacharrería',
    type: 'coffee shop',
    address: 'Calle Regina, 14, 41003 Sevilla',
  },
  {
    name: 'Café de Mayo',
    type: 'coffee shop',
    address: 'Calle Amor de Dios, 7, 41003 Sevilla',
  },
  {
    name: 'Caótica',
    type: 'bookstore',
    address: 'Calle José Gestoso, 8, 41003 Sevilla',
  },
  {
    name: 'La Fuga',
    type: 'bookstore',
    address: 'Calle Conde de Torrejón, 4, 41003 Sevilla',
  },
  {
    name: 'Casa Tomada',
    type: 'bookstore',
    address: 'Calle Muro de los Navarros, 66, 41003 Sevilla',
  },
  {
    name: 'Un Gato en Bicicleta',
    type: 'bookstore',
    address: 'Calle Pérez Galdós, 22, 41004 Sevilla',
  },
  {
    name: 'Librería Reguera',
    type: 'bookstore',
    address: 'Calle Almte. Apodaca, 23, 41003 Sevilla',
  },
]

Place.create(places)
  .then((places) => {
    console.log(`${places.length} place entries created!`)
    mongoose.connection.close()
  })
  .catch((err) => {
    console.log(`An error occurred upon seeding the database: ${err}`)
  })
