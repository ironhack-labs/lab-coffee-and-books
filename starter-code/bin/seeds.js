const Place = require('../models/Place')
const mongoose = require('mongoose')


const places = [
    {
        name: 'Rosetta',
        type: 'Coffee shop',
        address:{
            coordinates: [-99.160, 19.4201]
        }
    },
    {
        name: 'Pendulo',
        type: 'Bookstore',
        address:{
            coordinates:[-99.1638,19.4197]
        }

    },
    {
        name: 'Boicot Cafe',
        type: 'Coffee shop',
        address:{
            coordinates:[-99.1630, 19.4183]
        }
    }
]


mongoose.connect("mongodb://localhost:27017/coffeeAndBooks",()=> console.log('Conectado, estimado'));

Place.create(places)
    .then(places=>{
        console.log(`Created ${places.length} places`)
        mongoose.connection.close()
    })
    .catch(e=>{console.log(e)})

