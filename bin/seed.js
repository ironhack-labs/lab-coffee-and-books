const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'coffeeDB'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const places = [
    {
    name: 'O Portiño',
    type: 'cofee shop', 
    coordinates:{
        lat: 40.3941435,
        lng: -3.7004571
        }
    },
    {
        name: 'O Muiño',
        type: 'bookstore',
        coordinates:{
            lat: 40.4227683,
            lng: -3.7131485
            }
    },
    {
        name: 'Toni 2',
        type: 'bookstore',
        coordinates:{
            lat: 40.422638,
            lng: -3.6969615
            }
        },
    {
        name: 'Iberia',
        type: 'cofee shop', 
        coordinates:{
            lat: 40.4298619,
            lng: -3.707469
            }
    },
]

    
Place.create(places)
    .then(allPlacesCreated => console.log('Places added', allPlacesCreated))
    .catch(err => console.log('ERROR: ', err))



