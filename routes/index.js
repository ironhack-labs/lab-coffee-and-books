const express = require('express');
const router  = express.Router();
const CoffeeBook = require('../models/CoffeeBook');

/* GET home page */
router.get('/', (req, res, next) => {
  CoffeeBook.find().then( coffeebooks => {
    console.log(coffeebooks);
    res.render('index',{coffeebooks:JSON.stringify(coffeebooks)});
  })
});

router.post((req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newCoffeeBook = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

  // Save the restaurant to the Database
  coffeebook.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});



module.exports = router;