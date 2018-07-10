require('dotenv').config()

const mongoose  = require('mongoose')
const Place = require('../models/place')
// const dbName    = process.env.DBURL

//mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useMongoClient: true});
mongoose.connect('mongodb://localhost:27017/lab-gmaps', {useMongoClient: true});


let places = [
  {
    name: 'Libreria De Cuento',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam justo, pulvinar quis nulla a, aliquet sodales augue.',
    kind: 'Books',
    location: {
      type: 'Point',
      coordinates: [40.4040087, -3.698446]
    }
  },
  {
    name: 'Pum Pum Cafe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam justo, pulvinar quis nulla a, aliquet sodales augue.',
    kind: 'Coffee',
    location: {
      type: 'Point',
      coordinates: [40.4070886, -3.7016218]
    }
  }
]


Place.collection.drop()

Place.create(places, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${places.length} places`)
  mongoose.connection.close()
});
