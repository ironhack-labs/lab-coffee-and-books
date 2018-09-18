/* GET home page */


const express = require('express');
const router  = express.Router();
const Coffee = require('../models/coffee');

function getCoffees() {
  axios.get("http://localhost:3000/api")
  .then( response => {
    placeCoffees(response.data.coffees)
  })
  .catch(error => {
    next(error)
  })
}

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/maps', (req, res, next) => {
  Coffee.find((error, coffees) => {
    if (error) { next(error); }
    else {
      res.render('maps', { coffees });
    }
  })
})

router.post('/maps', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newCoffee = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

  // Save the restaurant to the Database
  coffee.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});

module.exports = router;
