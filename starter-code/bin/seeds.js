const mongoose = require('mongoose');
const Place = require('../models/place');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const places = [
    {
        name: "The litle Big Cafe",
        description: "coffee shop",
        location: { type: "Point", coordinates: [40.4354341, 3.7126132] }
    },
    {
        name: "Libreria Castelar",
        description: "bookstore",
        location: { type: "Point", coordinates: [40.4377507, 3.7116569] }
    },
    {
        name: "Cafe y pintxos con mucho duende",
        description: "coffee shop",
        location: { type: "Point", coordinates: [40.4366610, 3.7121337] }
    }
]

Place.create(places, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${places.length} places`)
    mongoose.connection.close();
});
