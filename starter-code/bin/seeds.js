const mongoose = require('mongoose')
const Place = require('../model/place')

const dbtitle = 'coffeLibraryDB'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })
Place.collection.drop()

const specialPlace = [{
        name: "Flat Tyre Café",
        type: 'coffee shop'
    },
    {
        name: "Cafebrería ad Hoc.",
        type: 'bookstore'
    },
    {
        name: "Kapelmuur Coffee Shop",
        type: 'coffee shop'
    },
]

Place.create(specialPlace)
    .then(() => mongoose.connection.close())
    .catch(err => next(new Error(err)))