//DB Connection
require('../config/db.config')

//Model
const Places = require('../models/place');


//Data
const places = [
    {
        name: "Cafe de la Luz",
        type : "Coffee Shop"
    },
    {
        name: "Matilda Café",
        type : "Coffee Shop"
    },
    {
        name: "Gran Café Gijón",
        type : "Coffee Shop"
    }, {
        name: "HanSo Café",
        type : "Coffee Shop"
    }, {
        name: "Panta Rhei",
        type : "Bookstore"
    }, {
        name: "Tipos infames",
        type : "Bookstore"
    }, {
        name: "La Central",
        type : "Bookstore"
    }, {
        name: "Librería Enclave",
        type : "Bookstore"
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
