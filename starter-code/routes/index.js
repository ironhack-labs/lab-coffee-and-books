const express = require('express');
const router  = express.Router();
const Restaurant=require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/restaurant', (req, res, next) => {
  res.render('restaurant');
});

router.post('/', (req, res, next) => {

  // add the location object
    let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
    };
    
    const newRestaurant = new Restaurant({
    name:        req.body.name,
    description: req.body.description,
    location:    location // <= add the location when creating a new restaurant
    });
  
    newRestaurant.save((error) => {
    if (error) { 
      next(error); 
    } else { 
      res.redirect('/');
    }
    })
  });




  
module.exports = router;


