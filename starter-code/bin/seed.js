// Database
const mongoose = require('mongoose')
const dbName = 'coffeenbooks'
mongoose.connect(`mongodb://localhost/${dbName}`)


//Model
const Place = require('/models/place.model')


// Data
const places = [
  {
     name: "Casa Alejandros",
     type: "coffee shop",
   },
   {
     name: "Rosas en invierno",
     type: "bookstore",
   },
   {
     name: "Shelbys",
     type: "bookstore",
  },
]


// Seeds
Place.create(places)
    .then(allThePlaces => {
        console.log(`Created ${allThePlaces.length} places`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the places', err))