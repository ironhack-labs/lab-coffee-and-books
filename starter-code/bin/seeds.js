const mongoose = require('mongoose');
const Place = require('../models/Place.model');
const dbName = 'coffeeandbooks1';
mongoose.connect(`mongodb://localhost/${dbName}`);


const places = [
    {
        name: 'Pasteleria Lisboa',
        type: 'coffee shop',
        location: [40.430133, -3.675758]
    },
    {
        name: 'El Corte Ingles',
        type: 'bookstore',
        location: [40.425371, -3.676779]
    },
    {
        name: 'Viena Capellanes',
        type: 'coffee shop',
        location: [40.426487, -3.683743]
        
    }
]

Place 
    .create(places)
    .then(allPlacesCreated => {
        console.log(`Created ${allPlacesCreated.length} places`)
        mongoose.connection.close();
    })
.catch(err => console.log(err))