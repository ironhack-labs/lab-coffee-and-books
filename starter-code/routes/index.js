const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/places', (req, res, next) => {
  Place.find()
    .then(allPlaces => {
      res.render('places', { allPlaces });
      // res.send(allPlaces)
      console.log("chegou")
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});

router.post('/places/add', (req, res, next) => {
  const { name, type } = req.body;
  const newPlace = new Place({ name, type })
  newPlace.save()
  .then((place) => {
    res.redirect('/places');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;