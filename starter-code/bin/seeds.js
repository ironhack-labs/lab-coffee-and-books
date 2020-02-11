require('dotenv').config();
const mongoose = require("mongoose");
const Place = require("../models/Place");

const place = [{
    name: "Bartolo",
    type: "coffee",
  }, {
    name: "Fnac",
    type: "shop",
  }, {
    name: "La Casa del Libro",
    type: "bookstore",
  }, {
    name: "Desigual",
    type: "shop",
  }, {
    name: "Levis",
    type: "shop",
  }, 

];

mongoose
  .connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    Place.deleteMany()
      .then(() => {
        return Place.create(place);
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

  // const schemaName = new Schema(
  //   {
  //     name: {type: String},
  //     type: { type: String, enum: ['coffee', 'shop', 'bookstore'] },
  //     catchPhrase: { type: String}
  //   },
  //   { timestamps: true }
  // );