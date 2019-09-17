const express = require("express");
const Place = require("../models/Place");

const router = express.Router();
router.get("/places", (req, res, next) => {
  Place.find().then(allPlaces => {
    res.json(allPlaces);
  });
});

router.get("/new", (req, res, next) => {
  res.render("addPlace");
});

router.post("/new", (req, res, next) => {
  const { name, lat, lng, type } = req.body;

  const newPlace = new Place({
    name,
    type,
    location: {
      coordinates: [lng, lat],
      type: "Point"
    }
  });

  newPlace
    .save()
    .then(place => {
      console.log("Place created");
      res.redirect("/");
    })
    .catch(error => next(error));
});

router.get("/", (req, res, next) => {
  Place.find({})
    .then(allPlaces => res.render("index", { allPlaces }))
    .catch(error => next(error));
});

router.get("/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then(placeDetail => res.render("detail", { placeDetail }))
    .catch(error => next(error));
});

router.post("/:id", (req, res) => {
  Place.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    type: req.body.type,
    location: {
      coordinates: [req.body.lng, req.body.lat],
      type: 'Point',
    }
  }, {
    new: true
  }).then(placeDetail => {
    res.redirect('/')
  }).catch((err) => console.log(err))
 });

 router.get("/:id/delete", (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => res.redirect("/"))
    .catch(error => next(error));
});

module.exports = router;
