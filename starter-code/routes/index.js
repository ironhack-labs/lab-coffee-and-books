const express = require('express');
const router = express.Router();

const Coffee = require('../models/Coffeeshop')

/* GET home page. */

router.get('/', function(req, res, next) {
  Coffee.find({}, (err, coffeeshop) => {
    res.render('index', {
      coffeeshop:coffeeshop,
      title: 'Coffe & Books'
    });
  });
});

router.post('/', function(req, res, next) {
  let location = {
    type: "point",
    coordinates: [req.body.longitude, req.body.latitude],
  };

const newCoffee = new Coffee ({
    name: req.body.name,
    description: req.body.description,
    location: location,
  });

newCoffee.save(error => {
  if (error) {
    console.log("ERROR");
  } else {
    res.redirect('/');
    console.log("The record was created successfully.");
  }
});
});

router.get('/coffee/:id', (req,res,next) => {
  res.render('map', {

  });
});

module.exports = router;
