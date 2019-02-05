const express = require('express');
const placeRoutes  = express.Router();
const Place = require('../models/place');

placeRoutes.get('/create', (req,res,next) => {
  res.render('places/create');
})

placeRoutes.post('/create', (req, res, next) => {
  const {name, type, latitude, longitude } = req.body;
  console.log(req.body);
  Place.add(name, type, latitude, longitude).then(() => {
    res.redirect('/')
  }).catch(err => {
    console.error('Error creating place', err)
  })
})

placeRoutes.get('/update', (req,res,next) => {
  res.render('places/update');
})

module.exports = placeRoutes;