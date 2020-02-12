const express = require('express');
const router = express.Router();
const Place = require('../models/place.model');

// GET => renderiza el creador
router.get('/new', (req, res) => res.render('places/new'))

router.post('/', (req, res, next) => {


  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location
  })

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('places/index-place');
    }
  });
});

// GET => lista de places de la DB
router.get('/index-places', (req, res, next) => {
  Place.find({}, (error, placesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render('places/index-places', {
        places: placesFromDB
      });
    }
  });
});

// GET => editar detalles de one place
router.get('/:place_id/edit', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('places/update', {
        place
      });
    }
  });
});

// POST => guarda cambios
router.post('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      place.name = req.body.name;
      place.type = req.body.type;
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

// DELETE => eliminar del DB
router.get('/:place_id/delete', (req, res, next) => {
  Place.remove({
    _id: req.params.place_id
  }, function (error, place) {
    if (error) {
      next(error);
    } else {
      res.redirect('/places/index-places');
    }
  });
});






// el api
router.get('/api', (req, res, next) => {
  Place.find()
    .then(allPlacesFromDB => res.json(allPlacesFromDB))
    .catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(thePlace => res.json(thePlace))
    .catch(err => next(err))
})










// GET => detalles
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