const express = require("express");
const router = express.Router();
const placeSchema = require("../models/place");

router.get("/add", (req, res, next) => {
  res.render("places/add");
});

router.get("/places", (req, res, next) => {
  placeSchema.find().then(places => {
    res.render("places/list", { places });
  });
});

router.get("/:id/edit", (req, res, next) => {
  placeSchema
    .findById(req.params.id)
    .then(place => res.render("places/edit", { place }));
});

router.post("/add", (req, res, next) => {
  placeSchema
    .create({
      name: req.body.name,
      type: req.body.type
    })
    .then(() => {
      res.redirect("/places");
    });
});

router.post("/:id/delete", (req, res, next) => {
  placeSchema
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/places"))
    .catch(err => console.log("An error occurred deleting a place: ", err));
});

router.post("/:id/edit", (req, res, next) => {
  placeSchema
    .findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      type: req.body.type
    })
    .then(() => res.redirect("/places"));
});

module.exports = router;
