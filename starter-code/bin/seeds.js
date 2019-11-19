//DB Connection
require('../config/db.config')

//Model
const Places = require('../models/place');


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
