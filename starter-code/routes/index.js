const express = require('express');
const router  = express.Router();
const Place = require('../models/place');
const googleAPI = process.env.GOOGLE_API_KEY;


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/', (req, res, next) => {
  let { name, type, lat, long } = req.body;
  console.log(name)
  console.log(type)
  console.log(lat)
  console.log(long)
  let location = {type: 'Point',
    coordinates: [parseFloat(long), parseFloat(lat)]}
  
  Place.create(new Place({name, type, location}))
  .then()
  .catch(err => console.log(err));
  res.redirect('/list');
});

router.get('/map', (req, res, next) => {
  res.render('map', { GMAPS: process.env.GOOGLE_API_KEY });
});

router.get('/api', (req, res, next) => {
  Place.find()
    .then(shops => {
      res.status(200).json({ shops });
    })
    .catch(error => console.log(error))
});

router.get('/list', (req, res, next) => {
  Place.find()
  .then(places => {
    res.render('list', {places});
  })
  .catch(err => console.log(err));
});

router.get('/delete/:placeID', (req, res, next) => {
  Place.findByIdAndRemove(req.params.placeID)
  .then(() => {
    res.redirect('/list');
  })
  .catch(err => console.log(err));
});

module.exports = router;
