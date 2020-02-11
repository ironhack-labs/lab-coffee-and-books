const express = require('express');
const router = express.Router();
const axios = require('axios')

const Places = require('../models/place');

// GET => render the form to create a new place
router.get('/new', (req, res, next) => {
  res.render('places/new');
});

// POST => to create new place and save it to the DB
router.post('/', (req, res, next) => {
  // add location object here
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Places({
    name: req.body.name,
    type: req.body.type,
    location: location // <= add the location when creating a new restaurant
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});

// GET => to retrieve all the places from the DB
router.get('/', (req, res, next) => {
  Places.find({}, (error, placesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render('places/index', {
        places: placesFromDB
      });
    }
  });
});

// GET => get the form pre-filled with the details of one restaurant
router.get('/:place_id/edit', (req, res, next) => {
  Places.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('places/update', {
        place
      });
    }
  });
});

// POST => save updates in the database
router.post('/:place_id', (req, res, next) => {
  Places.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      place.name = req.body.name;
      place.type = req.body.type;
      place.save(error => {
        if (error) {
          next(error);
        } else {
          res.redirect(`/${req.params.place_id}`);
        }
      });
    }
  });
});

// DELETE => remove the restaurant from the DB
router.get('/:place_id/delete', (req, res, next) => {
  Places.remove({
    _id: req.params.place_id
  }, function (error, place) {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});


// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
  Places.find({}, (error, allPlacesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({
        places: allPlacesFromDB
      });
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Places.findOne({
    _id: placeId
  }, (error, onePlaceromDB) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({
        place: onePlaceromDB
      });
    }
  });
});

// GET => get the details of one restaurant
router.get('/:place_id', (req, res, next) => {
  Places.findById(req.params.place_id, (error, place) => {
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