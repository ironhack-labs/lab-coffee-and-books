const express = require('express');
const router = express.Router();

const Place = require('../models/place.model')
/* GET home page */
router.get('/', (req, res, next) => {

  Place.find()
    .then(allPlaces => res.render('index', { allPlaces }))
    .catch(err => next(err))
});

module.exports = router;

