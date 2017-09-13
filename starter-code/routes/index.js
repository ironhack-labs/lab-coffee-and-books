const express = require('express');
const router = express.Router();
const Shop = require('../models/shop');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//This is what's happening when we click the save button
router.post('/save', (req, res, next) => {
  // Get Params from POST
  console.log(req.body);
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new shop with all the properties.
  const newShop = new Shop ({
    name:        req.body.name,
    description: req.body.description,
    location:    location
  });

  // Save the shop to the Database
  newShop.save((error) => {
    if (error) { console.log(error); }
    else {
      res.redirect('/');
      console.log('nope');
    }
  });
});




module.exports = router;
