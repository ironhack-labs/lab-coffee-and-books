
const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api', (req, res, next) => {
  Place.find((error, places) => {
    if (error) { next(error) }
    else { res.status(200).json({ places }) }
  })
})

module.exports = router;
