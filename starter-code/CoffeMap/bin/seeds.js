const mongoose = require('mongoose');
const Place = require('../models/places');

mongoose.connect('mongodb://localhost/coffe-and-books-dev');

place = [
    new Place({
        name: "The big four",
        kindOf: "Café",
        loc: {
            type: "Point",
            coordinates: [40.468202, -3.694894]
        },
    }),
    new Place({
        name: "Tap room",
        kindOf: "Cerveceria",
        loc: {
            type: "Point",
            coordinates: [40.420123, -3.697426]
        }
    }),
    new Place({
        name: "Fnac",
        kindOf: "Libreria",
        loc: {
            type: "Point",
            coordinates: [40.419213, -3.705457]
        }
    })];


Place.collection.drop();

Place.create(place, (err, p) => {
    if (err) {
        throw err;
    }
    p.forEach((u) => {
        console.log(`p added ${u.name}`)
    });
    //cierra la conexion
    mongoose.connection.close();
});