const mongoose = require('mongoose');
const Place= require('../models/Place');
mongoose.connect(`mongodb://localhost/Place`);

const places=
[
    {
        name: "coffee Manolo",
        type: "Coffee Shop"
    },
    {
        name: "Bookstore Pepe",
        type: "Bookstore"
    }
]

Place.create(places)
    .then(() => console.log('Places created on DB'))
    .then(() => mongoose.disconnect());