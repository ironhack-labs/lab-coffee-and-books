const express = require('express');
const router = express.Router();
const Places = require('../model/place')

/* GET home page. */
router.get('/', function(req, res, next) {
  let places = Places.find();

  res.render('index', {
    title: 'Books & Coffe',
    places: places
   });
});

router.get('/new', function(req, res, next){
  res.render('new', {
    title: 'Register new place'
  });
});

module.exports = router;
