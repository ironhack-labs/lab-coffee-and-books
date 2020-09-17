const mongoose = require("mongoose")
const Place = require("../models/place.model")

const dbName = "maps-bookstore"
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

// remove the previous entries
Place.collection.drop()

const places = [
    {
        name: "La Sombra Libros",
        type: "bookstore",
        location: {
            type: "Point",
            coordinates: [40.411458, -3.6970707]
        }
    },

    {
        name: "La cocina de mi vecina",
        type: "coffee shop",
        location: {
            type: "Point",
            coordinates:[40.4253466, -3.7041849]
        }
    },

    {
        name: "Elektra Cómics",
        type: "bookstore",
        location: {
            type: "Point",
            coordinates: [40.4226213, -3.7097167]
        }
    },

    {
        name: "Crêperie La Rue",
        type: "coffee shop",
        location: {
            type: "Point",
            coordinates: [40.4238807, -3.6970707]
        }
    }
]

Place.create(places)
    .then(allplaces => console.log(`Se han creado ${allplaces.length} entradas en la base de datos`))
    .catch(err => next(err))

// mongoose.connection.close(() => console.log('Mongoose default connection disconnected through app termination')) 