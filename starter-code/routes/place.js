const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then( places => {
    res.render('place/list', {places});
  }).catch(e=> next(e));
});

router.get('/api', (req, res, next) => {
  Place.find().then( places => {  
    console.log(places)
    res.json(places);
  }).catch(e=> next(e));
});

router.get('/new', (req, res, next) => {
  res.render('place/new');
});

router.post('/new', (req, res, next) => {

  let place = {
    name: req.body.name,
    type: req.body.type, 
    location: {
      lat: req.body.latitude,
      lng: req.body.longitude 
    }
  }
  
  Place.create(place).then( place => {
    res.redirect('/place');
  }).catch(e=> next(e));
});

router.get('/edit/:id', (req, res, next) => {
  const id = req.params.id;
  
  Place.findById(id)
  .then(place => {
    const response = {place};
    response[place.type.replace(' ', '')] = place.type;

    res.render("place/edit", { response })
  })
  .catch(err => next(err))
});

router.post('/edit/:id', (req, res, next) => {
  const id = req.params.id;

  const {name, type} = req.body;
  const location = {
    lat: req.body.latitude,
    lng: req.body.longitude
  }

  Place.findByIdAndUpdate(id, {$set: {name, type, location}})
  .then(place => {
    res.redirect("/place/")
  })
  .catch(err => next(err))

  res.redirect('/place/');
});

router.get('/delete/:id', (req, res, next) => {
  const id = req.params.id;
  
  Place.findByIdAndDelete(id)
  .then(place => {
    res.redirect("/place")
  })
  .catch(err => next(err))
});

module.exports = router;