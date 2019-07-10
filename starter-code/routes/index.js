const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/places', (req, res) => {
  Place.find()
  .then(place => {
    res.render('places', { 
      place,
      GMAPS: process.env.GMAPS
    });
  })
  .catch(err => console.log(err));
});

//add
router.get('/places/add', (req, res) => {
  res.render('place-add');
});

router.post('/places/add', (req, res, next) => {
  const { name, type, longitude, latitude} = req.body;

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  };

  const newPlace = new Place({ name, type, location});

  newPlace.save()
  .then((place) => {
    res.redirect('/places');
  })
  .catch((error) => {
    console.log(error);
  })
});

router.get('/places/:placeID', (req, res) => {
  const places = req.params.placeID;
  Place.findById(places)
  .then(place => {
    res.render('place-info', place);
  })
  .catch(err => console.log(err));
});

router.post('/places/delete/:placeID', (req, res) => {
  Place.findByIdAndRemove({ _id: req.params.placeID })
  .then((place) => {
    res.redirect('/places');
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/places/edit/:placeID', (req, res, next) => {
  Place.findById(req.params.placeID)
  .then((place) => {
    res.render("place-edit", {place});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/places/edit/:placeID', (req, res, next) => {
  const { name, type } = req.body;

  Place.update({_id: req.params.placeID}, { $set: {name, type}})
  .then((place) => {
    res.redirect('/places/' + req.params.placeID);
  })
  .catch((error) => {
    console.log(error);
  })
});

router.get('/api/places', (req, res, next) => {
  Place.find()
    .then(place => {
      console.log(place)
      res.status(200).json({ place });
    })
    .catch(error => console.log(error))
});


router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Place.findOne({ _id: placeId })
    .then(place => {
      res.status(200).json({ place });

    })
});

module.exports = router;
