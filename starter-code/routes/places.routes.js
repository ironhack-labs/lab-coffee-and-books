const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

// JSON file
router.get("/places", (req, res, next) => {
  Place.find().then(places => {
    res.json(places);
  });
});

// Create
router.get("/add-place", (req, res, next) => {
  res.render("places/add-place");
});

router.post("/add-place", (req, res, next) => {
  const { name, type, lat, lng } = req.body;

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
      res.redirect("/places");
    })
    .catch(error => next(error));
});

// Update
router.get("/select-place", (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render("places/select-place", { allPlaces }))
    .catch(err => next(err));
});

router.post("/select-place", (req, res, next) => {
  res.redirect(`/update-place/${req.body.place_id}`);
});

router.get("/update-place/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render("places/update-place", { place }))
    .catch(err => next(err));
});

// Delete
router.get("/delete-place", (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render("places/delete-place", { allPlaces }))
    .catch(err => next(err));
});

router.post("/delete-place", (req, res, next) => {
  Place.findByIdAndDelete(req.body.place_id)
    .then(res.redirect("/"))
    .catch(err => next(err));
});

module.exports = router;
