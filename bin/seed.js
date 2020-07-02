const mongoose = require('mongoose');
const Place = require('../models/place');

const dbName = 'cofee-shops';
mongoose.connect(`mongodb://localhost/${dbName}`);

const places = [
    {
        name: "lalalala",
        description: "coffee shop",
        location: { type: "Point", coordinates: [59.4300341, 9.7126132] }
    },
    {
        name: "lalilulelo",
        description: "bookstore",
        location: { type: "Point", coordinates: [30.4377999, 3.7199569] }
    },
    {
        name: "cosas nazis peter",
        description: "coffee shop",
        location: { type: "Point", coordinates: [49.4366610, 3.9929337] }
    }
]

Place.create(places, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${places.length} places`)
    mongoose.connection.close();
});