const express = require("express");
const Place = require("../models/Place");
const router = express.Router();

router.get("/", (req, res, next) => {
  Place.find({})
  .then(places => {
    res.render("index", {
      places: JSON.stringify(places)
    });
  })
  .catch(err => {
    next(err);
  })
});

router.get("/add", (req, res, next) => {
  res.render("places/add");
});

router.post("/add", (req, res) => {
  const { name, kind, lat, lng } = req.body;

  let location = {
    type: 'Point',
    coordinates: [lat, lng]
  };

  const newPlace = new Place({
    name,
    kind,
    location
  });

  newPlace.save()
    .then(place => {
      res.redirect("/");
    })
    .catch(err => {
      res.render("places/add", {
        errorMessage: err.message
      });
    });
});

module.exports = router;
