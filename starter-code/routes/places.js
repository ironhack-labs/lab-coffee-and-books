const express = require('express');
const router = express.Router();
const Place = require('../models/Place.js');


router.get('/', (req, res, next) => { //Find

  Place.find()
    .then(places => {
      res.render("places/index", { places });
    })
    .catch(error => {
      console.error(err);
      next(err);
    })
});


router.get('/new', (req, res, next) => {
  res.render('places/new');
});

router.post('/new', (req, res, next) => { //Save
  const newPlace = new Place();

  if (req.body.name == '' || req.body.type == '') {
    console.log('VACIO');
    res.redirect('/places');
  }

  newPlace.name = req.body.name;
  newPlace.type = req.body.type;
  console.log(newPlace.name);
  console.log(newPlace.type);

  newPlace.save()
    .then(place => {
      res.redirect('/places');
    })
    .catch(err => console.log(err));
});

router.post('/places/:id/delete', (req, res, next) => { //Delete
  Place.findByIdAndRemove(req.params.id)
    .then(place => {
      res.redirect('/places');
    })
    .catch(err => console.log(err));
});

module.exports = router;