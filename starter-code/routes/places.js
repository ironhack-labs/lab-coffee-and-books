const express = require("express");
const router = express.Router();
const placeSchema = require("../models/place");

router.get("/new", (req, res, next) => {
  res.render("places/new");
});

router.get("/places/list", (req, res, next) => {
  placeSchema.find().then(places => {
    res.render("places/list", { places });
  });
});

router.get("/:id/edit", (req, res, next) => {
  placeSchema
    .findById(req.params.id)
    .then(place => res.render("places/edit", { place }));
});

router.post("/new", (req, res, next) => {
  placeSchema
    .create({
      name: req.body.name,
      type: req.body.type,
      location: {
        type: "Point",
        coords: { lat: +req.body.latitude, lng: +req.body.longitude }
      }
    })
    .then(() => {
      res.redirect("/");
    });
});

router.post("/:id/delete", (req, res, next) => {
  placeSchema
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/places"))
    .catch(err => console.log(err));
});

router.post("/:id/edit", (req, res, next) => {
  const placeUpdate = {
    name: req.body.name,
    type: req.body.type,
    location: {
      type: "Point",
      coords: { lat: +req.body.latitude, lng: +req.body.longitude }
    }
  };
  placeSchema
    .findByIdAndUpdate(req.params.id, placeUpdate)
    .then(() => res.redirect("/places"));
});

router.get("/map", (req, res, next) => {
  placeSchema.find({}, { _id: 0 }).then(places => {
    res.json(places);
  });
});

module.exports = router;
