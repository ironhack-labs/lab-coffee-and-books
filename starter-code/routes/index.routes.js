const express = require('express');
const router  = express.Router();
const Place = require('../models/place.model');

// /* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

router.get('/', (req, res, next) => {
  Place.find({}, (error, placesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render('places/index', {
        places: placesFromDB
      });
    }
  });
});

router.get('/new', (req, res, next) => res.render('places/new'))

router.post('/', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newPlace = new Place({
    name: req.body.name,
    // description: req.body.description,
    location
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/places');
    }
  });
});

router.get('/:place_id/edit', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('places/update', {
        places
      });
    }
  });
});

router.post('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      place.name = req.body.name;
      //restaurant.description = req.body.description;
      place.save(error => {
        if (error) {
          next(error);
        } else {
          res.redirect(`/places/${req.params.place_id}`);
        }
      });
    }
  });
});


router.get('/:place_id/delete', (req, res, next) => {
  Place.remove({
    _id: req.params.place_id
  }, function (error, place) {
    if (error) {
      next(error);
    } else {
      res.redirect('/places');
    }
  });
});






// to see raw data in your browser, just go on: http://localhost:3000/restaurants/api
router.get('/api', (req, res, next) => {
  Place.find()
    .then(allPlacesFromDB => res.status(200).json({
      places: allPlacesFromDB
    }))
    .catch(err => next(err))
});






// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Place.findOne({
    _id: placeId
  }, (error, onePlaceFromDB) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({
        place: onePlaceFromDB
      });
    }
  });
});

// GET => get the details of one restaurant
router.get('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('places/show', {
        place: place
      });
    }
  });
});


module.exports = router;
