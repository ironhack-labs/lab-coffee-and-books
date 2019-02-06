const express = require("express");
const router = express.Router();

const Place = require("../models/place");

/* GET home page */
router.get("/place", (req, res, next) => {
  res.render("index");
});

router.get("/place/new", (req, res, next) => {
  res.render("new");
});

router.post("/place/new", (req, res, next) => {
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Place({
    name: req.body.name,
    type: req.body.value,
    location: location
  });

  newPlace.save(error => {
    if (error) {
      next(error);
    } else {
      res.redirect("/place");
    }
  });
});

router.get("/api", (req, res) => {
  Place.find({})
    .then(places => {
      res.status(200).json({ places: places });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
