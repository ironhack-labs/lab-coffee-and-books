const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Place = require('../models/place.js');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/add', (req, res, next) => {
  res.render('place-add');
})

router.get('/list', (req, res, next) => {
  Place.find()
    .then(allThePlacesFromDB => {
      console.log('Retrieved places from DB:', allThePlacesFromDB);
      res.render('list', { places: allThePlacesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the places from the DB: ', error);
    })
})

router.post('/add', (req, res, next) => {
  const { name, type} = req.body;
  const newPlace = new Place({ name, type });
  newPlace.save()
    .then((place) => {
      res.redirect('/list')
    })
    .catch((error) => {
      console.log(error)
    })
});

// router.get('/delete/:id', function(req,res){
//     mongoose.model("Place").remove({_id: req.params.id});
//     res.redirect('list');
// })

module.exports = router;
