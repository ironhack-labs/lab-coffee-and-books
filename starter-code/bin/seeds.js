const mongoose = require('mongoose')
const Place    = require('../models/Place')

const places = [
  {
    name: 'Centro de Salud',
    image: 'http://mxcity.mx/wp-content/uploads/2015/08/centro-de-salud-pulqueria.jpg',
    category: 'Bookstore',
    stars: 3,
    location:  {
      // Negativo primero, por que mexico, osea invertirlo al formato que usa mongo
      coordinates: [-99.163221,19.4212956]
    }
  },
  {
    name: 'Taqueria Orinoco',
    image: 'https://www.dondeir.com/wp-content/uploads/2017/12/taqueria-orinoco-tacos-con-estilo-regio-en-la-colonia-roma-02.jpg',
    category: 'Bookstore',
    stars: 4,
    location:  {
      coordinates:[-99.1670934, 19.4176674]
    }
  },
  {
    name: 'Hamburguesas Mataleon',
    image: 'http://cdn.mexiconewsnetwork.com/uploads/images/16774mataleon3.jpg',
    category: 'Bookstore',
    stars: 4,
    location:  {
      coordinates: [-99.1678435,19.4202671]
    }
  }
]

mongoose.connect('mongodb://localhost/geowork')
  .then(() => {
    Place.create(places)
      .then(places => {
        console.log(`You created ${places.length} places successfully`);
        mongoose.connection.close()
      })
      .catch((err)=>console.log(err))
  })
  .catch(err => {
    console.log(err);
  })
