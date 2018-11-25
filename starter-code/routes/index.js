const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then(places => {
    res.render('index',{places:JSON.stringify(places)});
  })
});

module.exports = router;
