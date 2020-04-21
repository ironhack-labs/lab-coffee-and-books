const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });
router.get('/', (req, res, next) => {
  Place.find()
    .then(placesFronmDB => {
      //console.log('places', placesFronmDB)
      res.render('index', { placesFronmDB })
    })
    .catch(err => next(err))
});

module.exports = router;
