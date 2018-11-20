const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then( places => {
    res.render('place/list', {places});
  }).catch(e=> next(e));
});

router.get('/new', (req, res, next) => {
  res.render('place/new');
});

router.post('/new', (req, res, next) => {

  let place = {
    name: req.body.name,
    type: req.body.type
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

  Place.findByIdAndUpdate(id, {$set: {name, type}})
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