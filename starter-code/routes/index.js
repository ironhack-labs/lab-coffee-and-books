const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.redirect('/places');
});

router.get('/api/:placeId', (req, res, next) => {
  Place.findById(req.params.placeId)
  .then(place => {
    res.status(200).json({place});})
  .catch(err => console.log(err));
});

router.get('/api', (req, res, next) => {
  Place.find()
  .then(places => res.status(200).json({places}))
  .catch(err => console.log(err));
});
module.exports = router;
