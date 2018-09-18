const mongoose = require('mongoose');
const place = require('../models/place.js');

mongoose.connect('mongodb://localhost/coffee-and-books', { useNewUrlParser: true })
.then(() => place.collection.drop())
.then(() => {
    return place.create([
        {
            name: 'Tierra burrito bar',
            description: 'Mexican burrito bookstore',
            typeOfStore: 'Bookstore',
            location: {
                type: 'Point',
                coordinates: [40.4240319,-3.6812207]
            }
        },
        {
            name: 'Goiko Grill',
            description: 'Venezuelan cafeteria',
            typeOfStore: 'Coffee shop',
            location: {
                type: 'Point',
                coordinates: [40.4366653,-3.6860237]
            }
        }
    ])
})
.then(() => {
    console.log('Db created');
    mongoose.disconnect();
})
.catch(e => console.log(e));

