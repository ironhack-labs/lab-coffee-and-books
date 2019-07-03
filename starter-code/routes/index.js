const express = require('express');
const router  = express.Router();
const Place    = require("../models/place")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('places/index', (req, res, next) => {
  Place
  // .find()
  .then((allPlaces) =>{
    res.render('index',{allPlaces});
  }).catch(error => {
    console.log(error);
  })
});


router.get('/places/new-place', (req, res, next) => {
  res.render('places/new-place')
});






module.exports = router;
