//DB Connection
require('../config/db.config')

//Model
const Places = require('../models/place');

//Function to randomize the coords
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

//Data
// todo: pass random number to coords
const places = [
    {
        name: "Cafe de la Luz",
        type: "Coffee Shop",
        location: { type: "Point", coordinates: [40.4183083, -3.70275] }
    },
    {
        name: "Matilda Café",
        type: "Coffee Shop",
        location: { type: "Point", coordinates: [40.4183083, -3.70275] }
    },
    {
        name: "Gran Café Gijón",
        type: "Coffee Shop",
        location: { type: "Point", coordinates: [40.4183083, -3.70275] }
    }, {
        name: "HanSo Café",
        type: "Coffee Shop",
        location: { type: "Point", coordinates: [40.4183083, -3.70275] }
    }, {
        name: "Panta Rhei",
        type: "Bookstore",
        location: { type: "Point", coordinates: [40.4183083, -3.70275] }
    }, {
        name: "Tipos infames",
        type: "Bookstore",
        location: { type: "Point", coordinates: [40.4183083, -3.70275] }
    }, {
        name: "La Central",
        type: "Bookstore",
        location: { type: "Point", coordinates: [40.4183083, -3.70275] }
    }, {
        name: "Librería Enclave",
        type: "Bookstore",
        location: { type: "Point", coordinates: [40.4183083, -3.70275] }
    },
]

places.map(place => {
    let lat = 40.4183083;
    let lng = -3.70275

    place.location.coordinates = [
        lat= lat * randomFloat(0.9999, 1.0001111),
        lng= lng * randomFloat(0.99, 1.01111)
    ]
})

// Seed the db
Places
    .deleteMany()
    .then(() => {
        Places
            .insertMany(places)
            .then(data => {
                console.log(`Data added to the db: ${data}`)
            })
            .catch(err => console.log(`Error seeding the db: ${err}`))
    })
    .catch(err => console.log(`Error seeding the db: ${err}`))
