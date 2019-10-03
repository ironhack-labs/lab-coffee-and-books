const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then(arrPlace => {
      res.render('index', {arrPlace});
    })
    .catch(err => console.log(`error: ${err}`));
});

router.get('/add', (req, res, next) => {
  res.render('placeAdd');
});

router.post('/add', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location: location
  });
  newPlace
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/api', (req, res) => {
  Place.find()
    .then(arrPlace => {
      res.json(arrPlace);
    })
    .catch(e => {
      throw new Error(e);
    });
});

router.get('/api/:placeId', (req, res) => {
  Place.findById(req.params.placeId)
    .then(place => {
      res.json(place);
    })
    .catch(e => {
      throw new Error(e);
    });
});

module.exports = router;
