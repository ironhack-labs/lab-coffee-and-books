const express = require('express');
const placeRoutes  = express.Router();
const Place = require('../models/place');

placeRoutes.get('/add', (req,res,next) => {
  res.render('places/create');
})

placeRoutes.get("/places", (req, res, next) => {
  Place.find().then(places => {
    res.render("places/list", { places });
  });
});

placeRoutes.post('/add', (req, res, next) => {
  Place.create({
    name: req.body.name,
    type: req.body.type
  })
  .then(() => {
    res.redirect('/')
  }).catch(err => {
    console.error('Error creating place', err)
  })
})

placeRoutes.get('/update', (req,res,next) => {
  res.render('places/update');
})

placeRoutes.get('/delete', (req,res,next) => {
  res.render('places/delete');
})

module.exports = placeRoutes;