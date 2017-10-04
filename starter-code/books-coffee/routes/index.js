const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Place = require('../models/place');
mongoose.connect('mongodb://localhost/books-coffee', {useMongoClient: true});

/* GET home page. */
router.get('/', (req, res, next) => {
  Place.find((error, places) => {
    if (error) { next(error); }
    else {
      res.render('index', { places });
    }
  });
});

router.get("/new", function(req, res, next){
  res.render("new");
});

router.post("/new", (req, res, next) => {
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const place = new Place({
    name: req.body.name,
    type: req.body.type,
    location
  });

  console.log(place);

  place.save((error) => {
    if (error) { console.log(error); }
    else {
      res.redirect('/');
    }
  });
});

router.get("/show/:id", (req, res, next) => {
    let id = req.params.id;
    place.findOneById({})
    res.render("show");
});


module.exports = router;
