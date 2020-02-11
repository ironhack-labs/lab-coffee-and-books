const express = require('express');
const router  = express.Router();
const Place = require("../models/place.js");
const coords=[]


router.get("/", (req, res, next) => {
  Place.find({})
    .then(allPlaces =>
      res.render("index", { places: allPlaces })
    )
    .catch(function() {
      next();
      throw new Error("There's an error.");
    });
});

router.get('/maps/:id', (req,res) => {
  Place.findById(req.params.id).then(place => {
    res.render('maps', place);
  }) 
});

router.get("/mostrar/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then(placeData =>
      res.render("mostrar", { place: placeData })
    )
});

router.get("/crear", (req, res, next) => res.render("crear"));
router.post("/crear", (req, res, next) => {
  Place.create({
    name: req.body.name,
    type: req.body.type,
    lat: +req.body.lat,
    lon: +req.body.lon
  })
    .then(() => res.redirect("/"))
    .then((placeCreated) => coords.push(placeCreated.lon)) 
    .then((placeCreated) => coords.push(placeCreated.lat)) 
    .catch(function() {
      next();
      throw new Error("Error");
    });
});

router.get("/:id/delete", (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => res.redirect("/"))
    .catch(function() {
      next();
      throw new Error("Error");
    });
});


router.get("/:id/editar", (req, res, next) => {
  Place.findById(req.params.id).then(place => {
    res.render('editar', place);
  }) 
});

router.post('/editar', (req,res) => {
  Place.find({name:req.body.name}).then(places => {
    if(places.length <= 0 || `${places[0]._id}` === req.body.id){
      Place.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        type:req.body.type,
        lat: req.body.lat,
        lon: req.body.lon,
        }).then(()=> res.redirect("/"))
    }
  });
  res.redirect("/")
});

module.exports = router;