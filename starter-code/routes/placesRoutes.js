const express = require('express');
const placesRouter  = express.Router();
const Place = require('../models/place');


placesRouter.get('/add', (req, res, next) => {
  res.render('add');
});


placesRouter.post('/add', (req, res, next) => {
  const {name, type, description, latitude, longitude} = req.body;
  Place.add(name, type, description, latitude, longitude).then(() => {
    res.redirect('/');
  })
});



module.exports = placesRouter;
