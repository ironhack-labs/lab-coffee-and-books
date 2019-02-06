const express = require("express");
const router = express.Router();
const Place = require("../models/place");

router.get("/", (req, res, next) => {
    Place.find()
    .then(places => {
    res.render("places", {places});
  })
  .catch(err => {
    console.log(err);
    next();
  });
})

router.get("/new", (req, res, next) => {
  res.render("newPlace")
});

router.post("/new", (req, res, next) => {
  Place.create({name: req.body.name, type: req.body.type})
  .then(places => {
    res.redirect("places", {places})
  })
  .catch(err => {
    console.log(err);
    next();
  })
})

router.get("/edit/:id", (req, res, next) => {
  console.log("hola", req.params.id)
  Place.findById(req.params.id)
  .then(place => {
    res.render("edit", place)
  })
  .catch(err => {
    console.log(err);
    next();
  })
});

router.post("/edit/:id", (req, res, next) => {
  Place.findByIdAndUpdate(req.params._id,{name:req.body.name,type:req.body.type})
  .then(place => {
    res.redirect("/places")
  })
  .catch(err => {
    console.log(err);
    next();
  })
})


module.exports = router;

