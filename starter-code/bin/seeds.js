const Place = require('../models/Place')

const mongoose = require('mongoose')

const places = [{
    name: 'Butcher & Sons',
    category: 'Restaurant',
    stars: 5,
    address: {
        coordinates: [-99.1605, 19.4201]
    }
},
{
    name: 'Pulqueria Los insurgentes',
    category: 'Bar',
    stars: '5',
    address: {
        coordinates: [-99.1638, 19.41]
    }
},
{
    name: 'Boicot Cafe',
    category: 'Coffee',
    stars: 5,
    address: {
        coordinates: [-99.16, 19.41]
    }
}
]
mongoose.connect('mongodb://localhost/mapbox')

Place.create(places).then(places => {
    console.log(`You created ${places.length} places succesfully`)
    mongoose.connection.close()
})
.catch(err => {
    console.log("Error")
})