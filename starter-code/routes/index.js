'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Eloi & Sara Map'
  });
});

router.post('/', function(req, res) {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };
});

const place = new Place({
  name: req.body.name,
  description: req.body.description,
  location: location
});

place.save((error) => {
  if (error) {
    console.log(error)
  } else {
    res.redirect('/';)
  }
});



module.exports = router;
