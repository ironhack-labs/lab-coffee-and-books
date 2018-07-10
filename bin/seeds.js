require('dotenv').config();

const mongoose = require('mongoose');
const place = require('../models/places');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


place.collection.drop();

place.create([
    {
        name: "McDonald's",
        kind: "coffeeshop",
        description: "i'm loving it",
        location:{
            type: "Point",
            coordinates:[40.402958,-3.7277824]
        }
    },
    {
        name: "100 montaditos",
        kind: "coffeeshop",
        description:"Jarras a 1 euro",
        location:{
            type: "Point",
            coordinates:[40.4030782,-3.7277825]
        }
    },
    {
        name: "auditorio nacional",
        kind: "library",
        description: "se ruega silencio",
        location:{
            type: "Point",
            coordinates:[40.4460902,-3.6798137]
        }
    },
    {
        name: "CUNEF",
        kind: "library",
        description: "financial thinking",
        location:{
            type: "Point",
            coordinates:[40.4516094,-3.7222991]
        }
    }
])
.then( () => {
    console.log("Restaurants created")
    mongoose.connection.close();
});