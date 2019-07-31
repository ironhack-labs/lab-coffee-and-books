const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restautants');


router.get('/new', (req, res, next) => res.render('restaurants/new'))
router.post('/', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newRestaurant = new Restaurant({
    name: req.body.name,
    description: req.body.description,
    location
  });

  newRestaurant.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/restaurants');
    }
  });
});



router.get('/', (req, res, next) => {
  Restaurant.find({}, (error, restaurantsFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render('restaurants/index', { restaurants: restaurantsFromDB });
    }
  });
});


router.get('/api', (req, res, next) => {
  Restaurant.find()
    .then(allRestaurants => res.json(allRestaurants))
    .catch(err => console.log('error', console.log(err)))
})



module.exports = router;