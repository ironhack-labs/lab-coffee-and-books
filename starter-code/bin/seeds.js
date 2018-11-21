const mongoose = require("mongoose");
const Place = require("../models/Place");

mongoose
    .connect('mongodb://localhost/places', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const places = [{
        name: "Patricio",
        type: ["coffe shop"]
    },
    {
        name: "Jorge",
        type: ["bookstore"]
    }
];

Place.create(places, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${places.length} places`);
    mongoose.connection.close();
});