require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/Place');

mongoose.connect(process.env.DBURL).then(() => console.log(`Connected to db: ${dburl}`));


Place.collection.drop();
Place.create([
    {
        name: "Starbucks",
        kind: 'CAFETERIA',
        location:{
            type: "Point",
            coordinates:[40.402958,-3.7277824]
        }
    },
    {
        name: "Casa del Libro",
        kind: 'BOOK-STORE',
        location:{
            type: "Point",
            coordinates:[40.4030782,-3.7277825]
        }
    }
])
.then( () => {
    console.log("Db filled")
    mongoose.disconnect();
})
.catch(e=>console.log(e.message));