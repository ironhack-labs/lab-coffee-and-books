const mongoose = require("mongoose");
const Places = require("../models/Place");

mongoose
  .connect(
    "mongodb://localhost/places",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const places = [
  {
    name: "Samper",
    type: 'coffee shop',
    //timestamps: true
  }
];

Places.create(places, err => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});
