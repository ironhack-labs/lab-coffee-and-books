const mongoose = require("mongoose");
const Place = require("../models/place");

mongoose
    .connect("mongodb://localhost/place", {
        useNewUrlParser: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error("Error connecting to mongo", err));

Place.deleteMany()
    .then(() => {
        const places = [{
                name: "coffee Oasis",
                type: "coffee shop"
            },
            {
                name: "Acuario",
                type: "coffee shop"
            },
            {
                name: "Panisimo",
                type: "coffee shop"
            },
            {
                name: "Martina Cocina",
                type: "coffee shop"
            },
            {
                name: "Bogat",
                type: "coffee shop"
            },
            {
                name: "Editoria Efatá",
                type: "bookstore"
            },
            {
                name: "Book Center",
                type: "bookstore"
            },
            {
                name: "Molar Records & Books",
                type: "bookstore"
            },

        ];

        Place.insertMany(places)

    })