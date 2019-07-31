const mongoose = require('mongoose');
const Place = require('../models/Place.model');

const dbName = "Coffees-and-Books"
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

Place.collection.drop()

const places = [
    {
        name: "Antonio Machado",
        type: "bookstore"
    },
    {
        name: "Chupito",
        type: "coffee shop"
    }
]

Place.create(places, err => {
    if (err) trow(err)
    mongoose.connection.close()
})