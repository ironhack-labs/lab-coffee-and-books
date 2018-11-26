const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then(places => {
    res.render('index', {
      places: JSON.stringify(places),
      placesList: places
    });
  })
});


// /*GET near places*/
// router.post('/', (req, res, next) => {
//   Place.find({
//     $near: {
//       $geometry: {
//         type: "Point",
//         coordinates: [40.5463993, -3.652186]
//       },
//       $maxDistance: 500,
//       $minDistance: 0
//     }
//   })
//   .then(places => {
//     res.render('index', {
//       places: JSON.stringify(places),
//       placesList: places
//     });
//   })
// });

module.exports = router;
