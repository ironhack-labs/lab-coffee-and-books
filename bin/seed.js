const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'coffee-books'
mongoose.connect(`mongodb://localhost/${ dbName }`)

const faker = require('faker/locale/es')

Place.collection.drop()

const places = [
  {
    name: faker.company.companyName(),
    type: 'coffee shop',
    description: faker.company.catchPhrase(),
    image: faker.image.food(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'bookstore',
    description: faker.company.catchPhrase(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'coffee shop',
    description: faker.company.catchPhrase(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'bookstore',
    description: faker.company.catchPhrase(),
    image: faker.image.food(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'coffee shop',
    description: faker.company.catchPhrase(),
    image: faker.image.food(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'bookstore',
    description: faker.company.catchPhrase(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'coffee shop',
    description: faker.company.catchPhrase(),
    image: faker.image.food(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'bookstore',
    description: faker.company.catchPhrase(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'coffee shop',
    description: faker.company.catchPhrase(),
    image: faker.image.food(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  },
  {
    name: faker.company.companyName(),
    type: 'bookstore',
    description: faker.company.catchPhrase(),
    image: faker.image.food(),
    location: {
      type: 'Point',
      coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
  }
]

Place
  .create(places)
  .then(all => {
    console.log(`Created ${ places.length } places`)
    mongoose.connection.close()
  })
  .catch(err => console.log('There was an error:', err))