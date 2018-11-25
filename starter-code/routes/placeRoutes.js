const express = require('express');
const placeRouter  = express.Router();
const Place = require('../models/place');


placeRouter.get('/add', (req, res, next) => {
  res.render('places/add');
});


placeRouter.post('/add', (req, res, next) => {
  const {name, type, description, latitude, longitude} = req.body;
  Place.add(name, type, description, latitude, longitude).then(() => {
    res.redirect('/');
  }).catch(err => {
    console.error(err, `Can't create place`);
  })
});


placeRouter.get('/:placeId/delete', (req,res) => {
  Place.findByIdAndDelete(req.params.placeId).then(()=> {
    res.redirect('/');
  })
  .catch((error)=> {
    console.log(`Can't delete place`)
    res.redirect('/');
  });
});

placeRouter.get('/:placeId/edit', (req,res) => {
  Place.findById(req.params.placeId).then(place => {
    res.render('places/edit', {place});
  }).catch((error)=> {
    console.log(error);
    res.render(`places/${req.params.placeId}/edit`);
  });
});

placeRouter.post('/:placeId/edit', (req,res) => {
  const place = {
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    location:{type:"Point", coordinates:[req.body.latitude,req.body.longitude]}
  };
  const placeId = req.params.placeId;
  Place.findByIdAndUpdate(placeId, place).then(() => {
    res.redirect('/');
  });
});


module.exports = placeRouter;
