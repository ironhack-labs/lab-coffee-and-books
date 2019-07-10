const express = require('express');

const router = express.Router();

const Place = require('../models/place');

// add
router.get('/add', (req, res, next) => {
  res.render('places/add');
});

router.post('/add', (req, res, next) => {
  const { name, type } = req.body;
  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude],
  };
  const newPlace = new Place({ name, type, location });

  newPlace.save()
    .then((place) => {
      res.redirect('/places');
    })
    .catch((error) => {
      console.log(error);
    });
});

// read
router.get('/', (req, res) => {
  Place.find()
    .then((places) => {
      res.render('places/read', { places, MAPSKEY: process.env.MAPSKEY });
    })
    .catch(err => console.log(err));
});

// update
router.get('/edit/:id', (req, res, next) => {
  const placeId = req.params.id;
  Place.findById(placeId)
    .then((place) => {
      Place.findOne({ type: { $ne: place.type } })
        .then(((otherTypes) => {
          if (otherTypes === null) {
            switch (place.type) {
              case 'Coffee Shop':
                otherTypes = { type: 'Bookstore' };
                break;
              case 'Bookstore':
                otherTypes = { type: 'Coffee Shop' };
                break;
              default:
                break;
            }
          }
          res.render('places/edit', { place, otherTypes, MAPSKEY: process.env.MAPSKEY });
        }));
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/edit/:id', (req, res, next) => {
  const { name, type } = req.body;
  Place.updateOne({ _id: req.params.id }, { $set: { name, type } })
    .then(() => {
      res.redirect('/places');
    })
    .catch((error) => {
      console.log(error);
    });
});

// delete
router.get('/delete/:id', (req, res, next) => {
  const placeId = req.params.id;
  Place.findById(placeId)
    .then((place) => {
      res.render('places/delete', { place });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/delete/:id', (req, res, next) => {
  const placeId = req.params.id;
  Place.findOneAndRemove({ _id: placeId })
    .then(() => {
      res.redirect('/places');
    })
    .catch((error) => {
      console.log(error);
    });
});

// api
router.get('/api', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.status(200).json({ places });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/api/:id', (req, res, next) => {
  const placeId = req.params.id;
  Place.findById(placeId)
    .then((places) => {
      res.status(200).json({ places });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
