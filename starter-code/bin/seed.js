const mongoose = require('mongoose')
const Places = require('../models/place')


const places = [
  {
    name: "Bartolo",
    type: "coffee shop",
  }, {
    name: "Fnac",
    type: "bookstore",
  }, {
    name: "La Casa del Libro",
    type: "bookstore",
  }, {
    name: "La dorado",
    type: "coffee shop",
  }, {
    name: "libros",
    type: "bookstore",
  },
];


mongoose
  .connect('mongodb://localhost/PLACES', {
    useNewUrlParser: true,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    Places.deleteMany()
      .then(() => {
        return Places.create(places);
      })
      .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
