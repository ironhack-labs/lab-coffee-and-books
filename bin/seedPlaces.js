require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/Place');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Place.collection.drop();

Place.create([
    {
        name: "Café la Palma",
        kind:"Cafe",
        location:{
            type: "Point",
            coordinates:[40.4268613,-3.7101808]
        }
    },
    {
        name: "Café Berlín",
        kind: "Cafe",
        location:{
            type: "Point",
            coordinates:[40.4195926,-3.7101317]
        }
    },
    {
        name: "Librería Papelería Pulgarcito",
        kind:"Bookstore",
        location:{
            type: "Point",
            coordinates:[40.4006254,-3.70501]
        }
    },
    {
        name: "Panta Rhei",
        kind: "Bookstore",
        location:{
            type: "Point",
            coordinates:[40.4235278,-3.7022669]
        }
    }
])
.then( () => {
    console.log("Places created")
    mongoose.disconnect();
});