const express = require('express');

const router = express.Router();

const Place = require('../models/place');


/* GET home page */	/* GET home page */
router.get('/', (req, res, next) => {
	router.get('/', (req, res, next) => {
  res.render('index'); res.render('index');
});	
});


router.get('/add', (req, res, next) => {
  res.render('add');
});

// POST => to create new place and save it to the DB
router.post('/', (req, res, next) => {
  // add the location object
  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude],
  };

  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location, // <= add the location when creating a new restaurant
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});

// display all the places
router.get('/places', (req, res, next) => {
  Place.find()
    .then((placeObj) => {
      res.render('places', { placeObj });
    })
    .catch(err => console.log(err));
});

// display place info
router.get('/places/:id', (req, res, next) => {
  const placeID = req.params.id;
  Place.findById(placeID)
    .then((buildingID) => {
      res.render('place-info', buildingID);
    })
    .catch(err => console.log(err));
});

// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
  Place.find({}, (error, allPlacesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ places: allPlacesFromDB });
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
  const placeId = req.params.id;
  Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ place: onePlaceFromDB });
    }
  });
});

module.exports = router;	module.exports = router;
