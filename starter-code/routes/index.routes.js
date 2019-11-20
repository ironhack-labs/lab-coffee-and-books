const express = require('express');
const router = express.Router();
const Places = require('../models/place.model')

//---HOME PAGE---//
router.get('/', (req, res, next) => {
  Places.find({}, (error, placesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render('index', {
        places: placesFromDB
      });
    }
  });
});

//---NEW PLACE RENDER FORM---//
router.get('/new', (req, res, next) => res.render('new-place'))

//---NEW PLACE SEND FORM---//
router.post('/new', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Places({
    name: req.body.name,
    description: req.body.description,
    location: location
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  })
});

//---EDIT PLACE RENDER FORM---//
router.get('/edit', (req, res) => {
  const placeId = req.query.placeId
  Places.findById(placeId)
    .then(editPlace => res.render('edit-place', editPlace))
    .catch(err => console.log('Error: ', err))
})

//---EDIT PLACE SEND FORM---//
router.post('/edit', (req, res) => {
  const placeId = req.query.placeId
  Places.findByIdAndUpdate(placeId, {
      name: req.body.name,
      description: req.body.description,
      location: {
        type: 'point',
        coordinates: [req.body.longitude, req.body.latitude]
      }
    })
    .then(res.redirect('/'))
    .catch(err => console.log('Error: ', err))
})

//---DELETE PLACE---//
router.get('/delete', (req, res) => {
  const placeId = req.query.placeId
  Places.findByIdAndRemove(placeId)
    .then(res.redirect('/'))
    .catch(err => console.log('Error consultando la base de datos: ', err))
})

//---RAW DATA RENDER---//
router.get('/api', (req, res, next) => {
  Places.find()
    .then(allPlacesFromDB => res.status(200).json({
      places: allPlacesFromDB
    }))
    .catch(err => next(err))
});


router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Places.findOne({
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

router.get('/:place_Id', (req, res, next) => {
  Places.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('/show-place', {
        place: place
      });
    }
  });
});

module.exports = router;