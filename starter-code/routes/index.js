const express = require('express');
const router  = express.Router();
const Place = require("../models/place")

router.get("/", (req, res) => {
  Place.find()
  .then(places => res.render('index', {places}))
});

router.post("/", (req, res) => {
  let name = req.body.name
  let type = req.body.type
  let lat = req.body.lat
  let lng = req.body.lng

  Promise.resolve()
    .then(() => Place.create({ 
      name: name,
      type: type,
      location: {
        "type" : "Point",
        "coordinates" : [
          lat,
          lng
        ]
      } 
}))
    .then(() => res.redirect("/"))
    .catch(err => res.render("index", {message: err}))
});

router.post("/delete/:id", (req, res) => {
  Place.findByIdAndDelete(req.params.id)
  .then(() => res.redirect('/'))
})

router.get("/update/:id", (req, res) => {
  Place.findById(req.params.id)
  .then(place => res.render("update", place))
  //.then(place => res.json(place))
  
})

router.post("/update/:id", (req, res) => {
  let name = req.body.name
  let type = req.body.type
  let lat = req.body.lat
  let lng = req.body.lng

  Promise.resolve()
    .then(() => Place.findByIdAndUpdate(req.params.id, { 
      name: name,
      type: type,
      location: {
        "type" : "Point",
        "coordinates" : [
          lat,
          lng
        ]} 
      })
    )
    .then(() => res.redirect('/'))
  })




module.exports = router;
