const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

router.get('/places', (req, res, next) => {
  Place 
    .find()
    .then(placesFromDB => res.json(placesFromDB))
    .catch(error => console.log(error))
})

module.exports = router;
