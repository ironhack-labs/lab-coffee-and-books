const express = require('express');

const router = express.Router();
const Place = require('../models/place.js');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find({}, (error, places) => {
    if (error) {
      next(error);
    } else {
      res.render('places/index', { places });
    }
  });
});

router.get('/create_new', (req, res, next) => {
  res.render('places/new');
});

router.post('/create_new', (req, res, next) => {
  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude],
  };
  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location,
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});

router.get('/update/:id', (req, res, next) => {
  Place.findById(req.params.id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('places/update', { place });
    }
  });
});

router.post('/update/:id', (req, res, next) => {
  Place.findById(req.params.id, (error, place) => {
    if (error) {
      next(error);
    } else {
      place.name = req.body.name;
      place.type = req.body.type;
      place.save((error) => {
        if (error) {
          next(error);
        } else {
          res.redirect(`/update/${req.params.id}`);
        }
      });
    }
  });
});

router.get('/index/:id/delete', (req, res, next) => {
  Place.remove({ _id: req.params.id }, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/places/api', (req, res, next) => {
  Place.find({}, (error, places) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ places });
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/places/api/:id', (req, res, next) => {
  const placeId = req.params.id;
  Place.findOne({ _id: placeId }, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ place });
    }
  });
});

module.exports = router;
