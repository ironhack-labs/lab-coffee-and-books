const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbname = 'coffe-books'

mongoose.connect(`mongodb://localhost/${dbname}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const places = [{
    name: 'Test1',
    type: 'coffe shop',
    location: {
        type: "Point",
        coordinates: {
            latitude: 28.132759,
            longitude: -15.436981
        }
    }
}, {
    name: 'Test2',
    type: 'coffe shop',
    location: {
        type: "Point",
        coordinates: {
            lat: 28.132759,
            lng: -15.436981
        }
    }
}, {
    name: 'Test3',
    type: 'bookstore',
    location: {
        type: "Point",
        coordinates: {
            lat: 28.132759,
            lng: -15.436981
        }
    }
}]

Place.create(places)
    .then(() => console.log(places))
    .catch(err => console.log(err))