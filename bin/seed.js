const mongoose = require('mongoose')
const Place = require("../models/place")

const dbtitle = "cofee-and-books"
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

Place.collection.drop()

const places = [
    {
        name: "La tetería",
        type: "Coffee shop",
        coordinates: [40.423086, -3.706298]

    },
    {
        name: "Toma café",
        type: "Coffee shop"
    },
    {
        name: "Cofee and Tea",
        type: "Coffee shop"

    },
    {
        name: "La librería",
        type: "Bookstore"
    },
    {
        name: "Libros y flores",
        type: "Bookstore"
    }

]

Place
.create (places)
    .then(allPlacesCreated => {
        console.log(`Created ${allPlacesCreated.length} Places`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))

