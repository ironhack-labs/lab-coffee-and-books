const express = require("express");
const router = express.Router();
const Place = require("../models/place");

/* GET user index page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("places/index", { places });
  });
});

router.get("/add", (req, res, next) => {
  res.render("places/add-place");
});

router.post("/add", (req, res, next) => {
  Place.create(req.body).then(place => res.redirect("/places"));
});

router.get("/update/:id", (req, res, next) => {
  Place.findById(req.params.id).then(place => {
    res.render("places/update-place", { place });
  });
});

router.post("/update", (req, res, next) => {
  let { name, type } = req.body;
  Place.findByIdAndUpdate(req.body.id, { name, type }).then(() =>
    res.redirect("/places")
  );
});

router.post("/delete/:id", (req, res, next) => {
  Place.findByIdAndDelete(req.params.id).then(() => res.redirect("/places"));
});

module.exports = router;
