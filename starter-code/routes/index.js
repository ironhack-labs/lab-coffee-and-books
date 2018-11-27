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

// router.post('/nearPlaces', (req, res, next) => {
//   console.log(req.body);
//   Place.find({
//     location: {
//       $near: {
//         $maxDistance: 100000,
//         $geometry: {
//           type: "Point",
//           coordinates: [req.body.location.lng, req.body.location.lat]
//         }
//       }
//     }
//   }).then(places => {
//     console.log(places);
//     // res.send({
//     //   places: JSON.stringify(places),
//     //   placesList: places
//     // });
//   });
// });


// router.post('/nearPlaces', (req, res, next) => {
//   console.log(req.body);
//   Place.find().where("location").near({
//     center: {
//       type: "Point",
//       coordinates: [req.body.location.lng, req.body.location.lat]
//     },
//         maxDistance: 1000,
//         spherical: true
//     }
//   ).find((error, places) => { //.exec
//     if(error) console.log("ERROR", error)
//     else console.log("BIEN", places);
//   })
// });


router.post('/nearPlaces', (req, res, next) => {
  let {lat,lng} = req.body.location;
  //console.log(`Searching locations with(${lat},${lng})`);
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
  }).then(places => {
    console.log(places);
    res.json(places);
  })
});

module.exports = router;
