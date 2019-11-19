const express = require("express");
const router = express.Router();
const Place = require("../models/Place.js");
const coords=[]

router.get("/index", (req, res, next) => {
  Place.find({})
    .then(allPlaces =>
      res.render("places/index", { places: allPlaces })
    )
    .catch(function() {
      next();
      throw new Error("There's an error.");
    });
});



router.get("/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then(placeData =>
      res.render("places/show", { place: placeData })
    )
    .catch(function() {
      next();
      throw new Error("There's an error 2.0!");
    });
});



router.get("/new", (req, res, next) => res.render("places/new"));
router.post("/new", (req, res, next) => {
  Place.create({
    name: req.body.name,
    type: req.body.type,
    lat: +req.body.lat,
    lon: +req.body.lon
  })
    .then(() => res.redirect("/places/index"))
    .then((placeCreated) => coords.push(placeCreated.lon)) ///////////////////////////////////
    .then((placeCreated) => coords.push(placeCreated.lat)) ///////////////////////////////////
    .catch(function() {
      next();
      throw new Error("Como puedes ser tan desgraciado de no ser capaz de añadir algo!");
    });
});

router.get("/:id/delete", (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => res.redirect("/places/index"))
    .catch(function() {
      next();
      throw new Error("Hmmmmm.... problems!");
    });
});

router.get("/:id/edit", (req, res, next) => {
  Place.findById(req.params.id)
    .then(placeDetail =>
      res.render("places/edit", { place: placeDetail })
    )
    .catch(function() {
      next();
      throw new Error("Algo no ha ido bien, willy!");
    });
});

router.post("/:id/edit", (req, res) => {
  Place.findByIdAndUpdate(req.body._id, req.body).then(updatedPlace => {
    res.redirect("/places/index");
  });
}); 

module.exports = router;