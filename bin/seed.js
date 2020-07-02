const mongoose = require('mongoose')
const Place = require("../models/place")

const dbTitle = "coffee-and-books"

mongoose.connect(`mongodb://localhost/${dbTitle}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

Place.collection.drop()

const places = [{
        name: "Café Regina",
        type: "coffee shop",
        location: {
            type: "Point",
            coordinates: {
                lat: 28.132759,
                lng: -15.436981
            }
        }
    },
    {
        name: "Lovely coffee",
        type: "coffee shop",
        location: {
            type: "Point",

            coordinates: {
                lat: 28.133876,
                lng: -15.436981
            }

        }

    },
    {
        name: "Bookies",
        type: "bookstore",
        location: {
            type: "Point",
            coordinates: {
                lat: 28.136190,
                lng: -15.435453
            }
        }
    },
    {
        name: "_MyBook",
        type: "bookstore",
        location: {
            type: "Point",
            coordinates: {
                lat: 28.132423,
                lng: -15.435065
            }
        }
    }
]

Place.create(places)
    .then(allPlaces => {
        console.log("All these places have been created: ", allPlaces)
        mongoose.connection.close(() => console.log("Conection closed after the seed!!!"))
    })
    .catch(err => console.log("There was an error creating the places"))