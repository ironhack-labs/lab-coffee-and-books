const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbtitle = 'coffee-and-books'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

const places = [
    {
        name: "Kaffeine",
        type: "coffee shop",
        location: {  
            type: "Point",
            coordinates: [51.520236, -0.141151],        
        } 
    },
    {
        name: "Attendant Fitzrovia",
        type: "coffee shop",
        location: {  
            type: "Point",
            coordinates: [51.519481, -0.140810],        
        } 
    },
    {
        name: "Shapero Rare Books",
        type: "bookstore",
        location: {  
            type: "Point",
            coordinates: [51.513668, -0.145794],        
        } 
    }
]


Place
    .create(places)
    .then(createPlaces => {
        console.log(`Created ${createPlaces.length} places`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error:', err))