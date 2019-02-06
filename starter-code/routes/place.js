const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

router.get("/", (req, res, next) => {
  Place.find()
    .then(places => {
      res.render("place/index", { places });
    })
    .catch(e => next(e));
});

router.get('/newPlace', (req, res, next) => {
  res.render('place/newPlace')
})

router.post('/newPlace', (req, res, next) => {
  place = ({name:req.body.name, type:req.body.type, location:{lat:+req.body.lat, lng:+req.body.lng}}) 
  .then(place => res.json)
  // .then(place => place.create, res.redirect('/place/index'))
  .catch(err => console.log(err))
})

module.exports = router;
