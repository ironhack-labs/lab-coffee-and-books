//DB Connection
require('../config/db.config')

//Model
const Places = require('../models/place');


//Data
const places = [
    {
        name: "Cafe de la Luz",
        type : "coffee shop"
    },
    {
        name: "Matilda Café",
        type : "coffee shop"
    },
    {
        name: "Gran Café Gijón",
        type : "coffee shop"
    }, {
        name: "HanSo Café",
        type : "coffee shop"
    }, {
        name: "Panta Rhei",
        type : "bookstore"
    }, {
        name: "Tipos infames",
        type : "bookstore"
    }, {
        name: "La Central",
        type : "bookstore"
    }, {
        name: "Librería Enclave",
        type : "bookstore"
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
