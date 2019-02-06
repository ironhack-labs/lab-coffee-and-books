const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.render('index', { places });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {
  const name = req.body.name;
  const product = req.body.product;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  
  const location = { type: 'Point', coordinates: [req.body.latitude, req.body.longitude] };

  if (name === '' || product === '' || location === []) {
    res.render('/create', { message: 'Indicate name, type and location of place' });
    return;
  }

  Place.findOne({ name })
    .then((place) => {
      if (place !== null) {
        res.render('/create', { message: 'Place already exists' });
        return;
      }
      const newPlace = new Place({ name, product, location });
      newPlace.save((err) => {
        if (err) {
          res.render('/create', { message: 'Something went wrong' });
        } else {
          res.redirect('/');
        }
      });
    });
});

router.get('/detail/:id', (req, res, next) => {
  Place.findOne({ _id: req.params.id })
    .then((place) => {
      res.render('detail', { place });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/edit/:id', (req, res, next) => {
  Place.findOne({ _id: req.params.id })
    .then((place) => {
      res.render('edit', { place });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/delete/:id', (req, res, next) => {
  Place.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/api', (req, res, next) => {
  Place.find({}, (error, allPlacesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ places: allPlacesFromDB });
    }
  });
});

module.exports = router;
