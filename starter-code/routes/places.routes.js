const express = require('express');
const router = express.Router();

const Place = require('../models/place.model');



// lista Places

router.get('/', (req, res, next) => {
  Place.find({}, (error, placesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render('places/index', { places: placesFromDB });
    }
  });
});

router.get('/new', (req, res, next) => res.render('places/new'))

// POST => Creamos place

router.post('/', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/places');
    }
  })
})


// GET => Editar place

router.get('/:place_id/update', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('places/update', { place });
    }
  });
});

// POST => Guardar cambios
router.post('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      place.name = req.body.name;
      place.type = req.body.type;
      place.latitude = req.body.latitude
      place.longitude = req.body.longitude
      place.save(error => {
        if (error) {
          next(error);
        } else {
          res.redirect(`/places`);
        }
      });
    }
  });
});



// DELETE => borrar place
router.get('/:place_id/delete', (req, res, next) => {
  Place.remove({ _id: req.params.place_id }, function (error, place) {
    if (error) {
      next(error);
    } else {
      res.redirect('/places');
    }
  });
});

router.get('/api', (req, res, next) => {
  Place.find()
    .then(allPlacesFromDB => res.status(200).json({ places: allPlacesFromDB }))
    .catch(err => next(err))
});



router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({ place: onePlaceFromDB });
    }
  });
});


router.get('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('places/show', { place: place });
    }
  });
});

module.exports = router;



