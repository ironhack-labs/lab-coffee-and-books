const express = require('express');
const router  = express.Router();

const Places = require('../models/places');

/* GET home page */
router.get('/', (req, res, next) => {
  Places.find({})
  .then(places => res.render('index', {places: JSON.stringify(places)}))
  .catch(err => {
    console.log(err);
    next();
  })
});

router.get('/locations', (req, res, next) => {
  Places.find({})
  .then(places => res.render('locations', {places}))
  .catch(err => {
    console.log(err);
    next();
  })
})

router.post('/locations', (req, res, next) => {
  const {name, latitude, longitude} = req.body;

  const newPlace = new Places({
    name,
    location: {
      type: 'Point',
      coordinates: [latitude, longitude]
    }
  })
  
  newPlace.save()
  .then(() => {
    res.redirect('/');
  })
  .catch(err => {
    console.log(err);
    next();
  })
})

router.get('/location/delete/:id', (req, res, next) => {
  Places.findByIdAndRemove(req.params.id)
  .then(() => {
    console.log('User deleted');
    res.redirect('/');
  })
  .catch(err => {
    console.log(err);
    next();
  })
})

module.exports = router;
