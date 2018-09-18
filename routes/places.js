const express = require("express");
const router = express.Router();
const Place = require("../models/place");

router.get("/", (req, res, next) => {
  Place.find()
    .then(place => {
      res.render("books/list", {
        place,
        placeStr: JSON.stringify(place)
      });
    })
    .catch(e => next(e));
});

router.get("/new", (req, res, next) => {
  res.render("books/new");
});

router.post("/new", (req, res, next) => {
  let place = {
    name: req.body.name,
    place: req.body.place,
    location: {
      type: "Point",
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  };

  Place.create(place)
    .then(places => {
      res.redirect("/places");
    })
    .catch(e => next(e));
});


module.exports = router;
