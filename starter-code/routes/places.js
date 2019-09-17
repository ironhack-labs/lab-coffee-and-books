const express = require('express');
const router  = express.Router();
const Place = require("../models/place")

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const path         = require('path');


router.get("/", (req, res, next) => {
  Place.find()
  .then(allPlaces => {
    res.render("places", {allPlaces})
    // res.json(allPlaces)

  })
})

router.get("/places", (req, res, next) => {
  Place.find()
  .then(allPlaces => {

    res.json(allPlaces);
  })
})





router.get("/new", (req, res) => {
  res.render("new")
})
router.post("/new", (req, res) => {
  const{name, type, longitude, latitude} = req.body;
  Place.create({
    name,
    type,
    location: {
      type: 'Point',
      coordinates: [longitude, latitude]
    }
  })
  .then(created => {
    res.redirect("/")
  })

})


router.get("/places/:id", (req, res) => {
  res.render("show")
})



router.get("/places/:id/edit", (req, res) => {
  let defaultSelectBook= true;
  Place.findById(req.params.id)
  .then(editPlace => {
    console.log(editPlace)
    if(editPlace.type=="bookstore") {
      res.render("edit", {editPlace, defaultSelectBook})
    }
    else {
      defaultSelectBook=false;
      res.render("edit", {editPlace, defaultSelectBook})

    }
    
  })
})
router.post("/places/:id/edit", (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body)
  .then(editing => {
    res.redirect("places")
  })
})


router.post("/places/:id/delete", (req, res) => {
  Place.findByIdAndRemove(req.params.id)
  .then(removed => {
    res.redirect("/places")
  })
})





 
module.exports = router;