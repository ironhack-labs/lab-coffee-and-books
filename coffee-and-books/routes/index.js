const express = require('express');
const router  = express.Router();
const place = require('../models/place');

router.get('/', (req, res, next) => {
  place.find()
  .then(places => res.render('index', {places, placesStr: JSON.stringify(places)}))
  .catch(e => next(e));
});

module.exports = router;
