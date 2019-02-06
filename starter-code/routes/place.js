const express = require('express');

const router = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
  .then((places) => {
    res.render('place/index', { places });
  });
});

router.get('/new', (req, res, next) => {
  res.render('place/new');
});

router.post('/new', (req, res, next) => {
  const name = req.body.name;
  const type = req.body.type;
  const newPlace = new Place({
    name,
    type
  });
  router.post('/', (req, res, next) => {
    // add the location object
    const location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    };

    const newPlace = new newPlace({
      name: req.body.name,
      description: req.body.description,
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

  newPlace.save();
  res.redirect('/places');
});

router.get('/edit/:id', (req, res, next) => {
  Place.findById(req.params.id).then((place) => {
    res.render('place/edit', { place });
  });
});

router.post('/edit/:id', (req, res, next) => {
  Place.findById(req.params.id, (err, place) => {
    if (err) {
      next(err);
    } else {
      place.name = req.body.name;
      place.type = req.body.type;
      router.post('/', (req, res, next) => {
        // add the location object
        const location = {
          type: 'Point',
          coordinates: [req.body.longitude, req.body.latitude]
        };

        const newPlace = new Place({
          name: req.body.name,
          description: req.body.description,
          location // <= add the location when creating a new restaurant
        });

        newPlace.save((error) => {
          if (error) {
            next(error);
          } else {
            res.redirect('/');
          }
        });
      });

      place.save();
      res.redirect('/places');
    }
  });
});

router.get('/delete/:id', (req, res, next) => {
  Place.remove({ _id: req.params.id }).then(() => {
    res.redirect('/places');
  });
});
module.exports = router;
