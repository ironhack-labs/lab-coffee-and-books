require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/Place');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Place.collection.drop();

Place.create([
    {
        name: "Starbucks",
        description:"Un frapuccino muy rico",
        kind: "Coffee",
        location:{
            type: "Point",
            coordinates:[38.402958,-6.454545]
        }
    },
    {
        name: "Librería Nacional",
        description:"Hay que leer más",
        kind: "Book",
        location:{
            type: "Point",
            coordinates:[40.4030782,-3.7277825]
        }
    }
])
.then( () => {
    console.log("Places created")
    mongoose.disconnect();
});