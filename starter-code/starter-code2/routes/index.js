const express = require('express');
const router  = express.Router();
const Coffeeshop = require("../models/Coffeeshops");


/* GET home page. */
router.get("/", (req, res, next) => {
  console.log("entrando a raiz");
  Coffeeshop.find((error, restaurants) => {
    if (error) { next(error); }
    else {
      res.render('index', { restaurants });
    }
  });
});

router.post("/", (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const cf = new Coffeeshop ({
      name:        req.body.name,
      description: req.body.description,
      location:    location
    });

  // Save the restaurant to the Database
  cf.save((error) => {
    if (error) { console.log(error); }
    else {
      res.redirect('/');
    }
  });
});

module.exports = router;
