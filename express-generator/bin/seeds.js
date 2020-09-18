require('dotenv').config()
const mongoose = require('mongoose')
const Places = require('../models/place.model')

//console.log(process.env.DB)

mongoose.connect(`mongodb://localhost/lab-coffe-books`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.collections['places'].drop(() => console.log("Collection droped")) 

/*const places = [{
    name: "Starbucks",
    type: "Very good coffe and something expensive",
    location: ""
}, {
    
    name: "Casa Lola",
    description: "Place very comfortable and familiar with library"
}]
*/
const places = [{
    name: "Café Regina",
    type: "coffe shop",
    location: {
        type: "Point",
        coordinates: {
            lat: 28.132759,
            lng: -15.436981
        }
    }
}, {
    name: "Bookies",
    type: "bookstore",
    location: {
    type: "Point",
    coordinates: {
        lat: 28.136190,
        lng: -15.435453
    }
    }
  }]



Places.create(places)
    .then(places => console.log(`Se han creado ${places.length} nuevos sitios`))
    .catch(err => console.log(err))

