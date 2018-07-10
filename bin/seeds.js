require('dotenv').config();

const mongoose = require('mongoose');
const place = require('../models/Place');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


place.collection.drop();

place.create([
    {
        name: "Museo Reina Sofía",
        description: "muy bonita",
        kind: "library",
        location: {
            type: "Point",
            coordinates: [40.407458, -3.6968451]
        }
    },
    {
        name: "Maria Zambrano",
        description: "Mucha gente",
        kind: "library",
        location: {
            type: "Point",
            coordinates: [40.4491293, -3.7353069]
        }
    }
])
place.create([
    {
        name: "Carmencita",
        description: "Muy buen café",
        kind: "coffeeshop",
        location: {
            type: "Point",
            coordinates: [40.4260871, -3.7096285]
        }
    },
    {
        name: "Toma Café",
        description: "Magnífico café",
        kind:"coffeeshop",
        location: {
            type: "Point",
            coordinates: [40.4264767, -3.708126]
        }
    }
])
    .then(() => {
        console.log("Restaurants created")
        mongoose.disconnect();
    });