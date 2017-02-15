var express = require('express');
var router = express.Router();

const Books           = require("../models/books");
const Coffee           = require("../models/coffee");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new',(req, res, next) => {
  Coffee.find((error, coffee) => {
    if (error) { next(error); }
    else {
      res.render('/', { coffee });
    }
  })
})

router.post('/new',(req, res, next) => {

  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const CoffeeInfo = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

const newCoffee = new Coffee(CoffeeInfo);
  // Save the restaurant to the Database

  newCoffee.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});




module.exports = router;
