require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/Place');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Place.collection.drop();

Place.create([
    {
        name: "McDonald's",
        location: {
            type: "Point",
            coordinates: [40.402958, -3.7277824]
        }
    },
    {
        name: "100 montaditos",
        location: {
            type: "Point",
            coordinates: [40.4030782, -3.7277825]
        }
    }
])
    .then(() => {
        console.log("Places created")
        mongoose.disconnect();
    });
