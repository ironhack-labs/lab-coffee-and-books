const express = require('express');
const Happyplace = require('../models/Happyplace');
const router = express.Router();
const path = require('path');


router.get('/', (req, res, next) => {
  console.log("hola");
  Happyplace.find({}, (err, listplaces) => {
    console.log('listplaces');
      if (err) { return next(err); }
    res.render('places/main', {
      listplaces: listplaces
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('places/new');
});

router.post('/new', (req, res, next) => {
console.log("entro en post");
    const newplace = {
      name: req.body.name,
      type: req.body.type,
      address: req.body.address
    };
console.log(newplace);

    const addplace = new Happyplace(newplace);

    addplace.save((err) => {
      if (err) { return next(err); }
      return res.redirect('/places');
    });
  });

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Happyplace.findById(id, (err, place) => {
    res.render('places/show', {
      place: place
    });
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id;

  Happyplace.findByIdAndRemove(id, (err, product) => {
    if (err){ return next(err); }
    return res.redirect('/places');
  });
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;

  Happyplace.findById(id, (err, place) => {
    res.render('places/edit', {
      place: place
    });
  });
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  let latitude = req.body.latitude;
  let longitude = req.body.longitude;
  const updates = {
    name: req.body.name,
    type: req.body.type,
    address: [latitude, logitude]

  };
  Happyplace.findByIdAndUpdate(id, updates, (err, place) => {
    if (err){ return next(err); }
    return res.redirect('/places');
  });
});





module.exports = router;
