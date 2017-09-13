var express = require('express');
var router = express.Router();
const Place = require("../models/place");


/* GET home page. */
router.get('/', (req, res, next) => {
  Place.find({}, (err, places ) => {
    if (err) { next(err)}

    res.render('index', { places: places});
  });
});

router.post("/create", (req, res, next) => {

  const newPlace = new Place({
    name: req.body.name,
    location: { 
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      type: req.body.place
      }
    }); 

  newPlace.save((err) => {
    if (err) {return next(err)}

    res.redirect('/');
  })  
  });

module.exports = router;
