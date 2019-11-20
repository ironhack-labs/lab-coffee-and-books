const express = require('express');
const router = express.Router();
const Places = require("../models/place.model")

/* GET home page */
router.get('/', (req, res) => res.render('index'))

router.get('/api', (req, res, next) => {
  Places.find()
    .then(allPlaces => res.status(200).json({
      Places: allPlaces
    }))
    .catch(err => next(err))
});



router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Places.findOne({
    _id: placeId
  }, (error, onePlace) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({
        restaurant: onePlace
      });
    }
  });
});


// router.post('/', (req, res, next) => {

//   let location = {
//     type: 'Point',
//     coordinates: [req.body.longitude, req.body.latitude]
//   }

//   const newPlaces = new Places({
//     name: req.body.name,
//     type: req.body.type,
//     location
//   });

//   newPlaces.save((error) => {
//     if (error) {
//       next(error);
//     } else {
//       res.redirect('/');
//     }
//   });
// });
module.exports = router