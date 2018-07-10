const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places: JSON.stringify(places) });
  });
});

router.get("/new", (req, res, next) => {
  res.render("places/new");
});


router.post("/new", (req, res) => {
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
      res.render("places/new", {
        errorMessage: err.message
      });
    });
});


module.exports = router;
