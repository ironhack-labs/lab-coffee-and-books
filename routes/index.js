
const express = require('express');
const router  = express.Router();
const Place = require('../models/place');
const Coffee = require('../models/coffee');


router.get('/', (req,res,next) => {
  const places = [];
  Place.find()
  .then( books => {
    books.forEach(element => {
      places.push(element)
    });
    Coffee.find()
    .then( coffees => {
      coffees.forEach(element => {
        places.push(element)
      });
      res.render('place/list', {
        places,
        placesStr: JSON.stringify(places)
      });
    })
  }).catch(e=> next(e));
})


router.get('/places', (req, res, next) => {
  Place.find().then( places => {
    res.render('place/list', {
      places,
      placesStr: JSON.stringify(places)
    });
  }).catch(e=> next(e));
});


router.get('/places/new', (req, res, next) => {
  res.render('place/new');
});

router.post('/places/new', (req, res, next) => {

  let place = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(place);
  Place.create(place).then( place => {
    res.redirect('/places');
  }).catch(e=> next(e));
});


// –––––––––––––––––

router.get('/coffees', (req, res, next) => {
  Coffee.find().then( places => {
    res.render('coffee/list', {
      places,
      placesStr: JSON.stringify(places)
    });
  }).catch(e=> next(e));
});


router.get('/coffees/new', (req, res, next) => {
  res.render('coffee/new');
});

router.post('/coffees/new', (req, res, next) => {

  let coffee = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(coffee);
  Coffee.create(coffee).then( coffee => {
    res.redirect('/coffees');
  }).catch(e=> next(e));
});

module.exports = router;
