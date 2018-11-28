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


/*GET near places*/

router.post('/nearPlaces', (req, res, next) => {
  let {lat,lng} = req.body.location;
  //console.log(`Searching locations with(${lat},${lng})`);
  //let places = [];
  Place.find({
    location: {
      $near: {
        $maxDistance: 1000,
        $geometry: {
          type: "Point",
          coordinates: [lat,lng]
        }
      }
    }
  }).then(nearPlaces => {
    //console.log(nearPlaces);
    res.json(nearPlaces);
  })
});

module.exports = router;
