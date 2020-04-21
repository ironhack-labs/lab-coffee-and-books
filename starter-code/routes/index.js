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

router.get('/api', (req, res, next) => {
  Place.find({}, (error, allPlacesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.json({ places: allPlacesFromDB });
    }
  });
});


router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {
    if (error) {
      next(error)
    } else {
      res.json({ restaurant: onePlaceFromDB });
    }
  });
});


module.exports = router;
