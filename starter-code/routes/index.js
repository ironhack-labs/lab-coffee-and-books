const express = require('express');

const router = express.Router();

const PlaceModel = require('../models/Place.js');

// Show List
router.get('/', (req, res) => {
  PlaceModel.find()
    .then((returnedPlaces) => {
      res.render('placesList', { placesList: returnedPlaces });
    })
    .catch((error) => {
      console.log(error);
    });
});

// Open form Create
router.get('/places/add', (req, res) => {
  res.render('place-add');
});

// Create 
router.post('/places/add', (req, res) => {
  const { name, type } = req.body;

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  console.log(location);

  const newPlace = new PlaceModel({
    name,
    type,
    location: location
  });
  console.log(newPlace);

  newPlace.save()
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });
});

// Open form Edit
router.get('/places/edit/:id', (req, res) => {
  PlaceModel.findOne({ '_id': req.params.id })
    .then((place) => {
      res.render('place-edit', { place });
    })
    .catch((err) => {
      console.error(err);
    });
});

// Edit
router.post('/places/edit', (req, res) => {
  const { name, type } = req.body;

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  PlaceModel.update({ _id: req.query.placeId }, { name, type, location })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/place/del/:id', (req, res) => {
  PlaceModel.deleteOne({ '_id': req.params.id })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/places/api', (req, res, next) => {
  PlaceModel.find({}, (error, allRPlacesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ places: allRPlacesFromDB });
    }
  });
});


module.exports = router;
