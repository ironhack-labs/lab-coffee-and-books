const express = require('express');
const router  = express.Router();
const Place = require ('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/places', (req, res, next) => {
  place.find()
    .then(place => {
      res.render('places', { place });
    })
    .catch(error => {
      console.log(error);
    })
  })
module.exports = router;
