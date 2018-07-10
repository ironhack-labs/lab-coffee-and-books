require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/Place');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Place.collection.drop();

Place.create([
    {
        name: "Casa del libro",
        description:"Libros mil",
        whatplace: Books,
        location:{
            type: "Point",
            coordinates:[40.4028405,-3.7015178]
        }
    },
    {
        name: "",
        description:"Jarras a 1 euro",
        location:{
            type: "Point",
            coordinates:[40.4030782,-3.7277825]
        }
    }
])
.then( () => {
    console.log("Restaurants created")
    mongoose.disconnect();
});