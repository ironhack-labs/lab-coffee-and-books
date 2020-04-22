const mongoose = require("mongoose");
const Place = require("../models/place");

const dbName = "coffee-books";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const places = [
  {
    name: "HanSo Café",
    type: "coffee shop",
    location: {
      type: "ponit",
    },
    coodinates: [40.423887, -3.705546],
  },
  {
    name: "Greek N Shop",
    type: "coffee shop",
    location: {
      type: "ponit",
    },
    coodinates: [40.424933, -3.702029],
  },
  {
    name: "Café de la luz",
    type: "coffee shop",
    location: {
      type: "ponit",
    },
    coodinates: [40.422121, -3.702541],
  }
];

Place.create(places)
    .then(allThePlaces => {
        console.log(`${allThePlaces.length} places created!`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred: ${err}`))  