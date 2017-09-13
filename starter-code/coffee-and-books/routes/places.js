const express        = require("express");
const places         = express.Router();
const Place          = require("../models/place");

places.get('/', (req, res, next) => {
  res.render('places/new');
});


places.post('/save', (req, res, next) => {
  console.log('saving');

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Place({
    name: req.body.name,
    category: req.body.category,
    location: location
  });

  newPlace.save((err) => {
    if (err) {
      res.render("places/new", { message: "Something went wrong" });
    } else {
      res.redirect("/places");
    }
  });

});

module.exports = places;
