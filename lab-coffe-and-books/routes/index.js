const express = require('express');
const router  = express.Router();
const Place= require("../models/Place")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/coffees', (req, res, next) => {
  Place.find({kind:"Coffee"}).then( places => {
    res.render('places/coffees', {
      places,
      restStr: JSON.stringify(places)
    });
  }).catch(e => next(e));
});

router.get('/books', (req, res, next) => {
  Place.find({kind:"Book"}).then( places => {
    res.render('places/books', {
      places,
      restStr: JSON.stringify(places)
    });
  }).catch(e => next(e));
});

router.get('/new', (req, res, next) => {
  res.render('places/new');
});

router.post('/new', (req, res, next) => {

  let place = {
    name: req.body.name,
    kind: req.body.kind,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(place);
  Place.create(place).then( () => {
    res.redirect('/');
  }).catch(e=> next(e));
});



module.exports = router;
