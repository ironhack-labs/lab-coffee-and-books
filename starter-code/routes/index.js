const express = require("express");
const router = express.Router();
const Place = require("../models/place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find()
    .then(places => res.render("index", { places }))
    .catch(error => console.log(error));
});

router.post("/add", (req, res, next) => {
  const { name, type } = req.body;
  const location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };
  const newPlace = new Place({ name, type, location });
  newPlace
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch(error => console.log(error));
});

router.post("/edit/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render("edit", { place }))
    .catch(error => error);
});

router.post("/delete/:id", (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/"))
    .catch(error => error);
});

router.post("/:id/edit", (req, res, next) => {
  const { name, place } = req.body;
  const location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };
  Place.findByIdAndUpdate(req.params.id, { name, place, location })
    .then(() => res.redirect("/"))
    .catch(error => console.log(error));
});

router.get("/places/api", (req, res, next) => {
  Place.find()
    .then(places => {
      res.json(places);
    })
    .catch(error => console.log(error));
});

module.exports = router;
