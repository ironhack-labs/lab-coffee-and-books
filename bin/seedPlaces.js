require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/places');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Place.collection.drop();

Place.create([
    {
        name: "Libreria de Cuento",
        description:"libreria",
        location:{
            type: "Point",
            coordinates:[40.4039835,-3.7662919,12]
        }
    },
    {
        name: "Traficantes de sueños",
        description:"todos los libros",
        location:{
            type: "Point",
            coordinates:[40.4116454,-3.776323,12]
        }
    }
])
.then( () => {
    console.log("Places created")
    mongoose.disconnect();
});