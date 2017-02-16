/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    Place.find((error, places) => {
      if (error) {
        next(error);
      } else {
        res.render('places/index', {
          places,
          jsonPlaces: JSON.stringify(places)
        });
      }
    });
  })
  .post((req, res, next) => {
    let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    };

    const newPlace = {
      name: req.body.name,
      description: req.body.select.value,
      location
    };
    console.log(newPlace);
    const place = new Place(newPlace);

    place.save((error) => {
      if (error) {
        next(error);
      } else {
        res.redirect('/');
      }
    });

  });


router.route('/new')
  .get((req, res, next) => {
    res.render('places/new');
  });


router.route('/:place_id')
  .get((req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
      if (error) {
        next(error);
      } else {
        res.render('places/show', {
          place,
          jsonPlace: JSON.stringify(place)
        });
      }
    });
  })
  .post((req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
      if (error) {
        next(error);
      } else {
        place.name = req.body.name;
        place.description = req.body.description;
        place.save((error) => {
          if (error) {
            next(error);
          } else {
            res.redirect('/');
          }
        });
      }
    });
  });

// router.route('/:place_id/edit')
//   .get((req, res, next) => {
//     Place.findById(req.params.place_id, (error, place) => {
//       if (error) {
//         next(error);
//       } else {
//         res.render('places/update', {
//           place
//         });
//       }
//     });
//   });

router.route('/:place_id/delete')
  .get((req, res, next) => {
    Place.remove({
      _id: req.params.place_id
    }, function(error, place) {
      if (error) {
        next(error);
      } else {
        res.redirect('/');
      }
    });
  });

module.exports = router;
