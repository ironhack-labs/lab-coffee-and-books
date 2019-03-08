const express = require('express');
const router  = express.Router();

// Load the Place DB document mongoose model
const Place = require('../models/Place')

// say hello
router.get('/',
  (_, res, next) =>
{
  res.send('Hello! This is the API for coffeee and books v 0.0.0.\nTo use this API go to /api/places.')
})

// GET list wih limits
router.get('/places',
  (_, res, next) =>
{
  res.send('API endpoint that returns the LIST of places with the limits speciifed in the query')
})

// 
router.get('/places/:_id',
  (req, res, next) =>
{
  res.send('API endpoint that RETURNS the place with specified _id')
})

// 
router.post('/places/:_id',
  (req, res, next) =>
{
  res.send('API endpoint that CREATES a new place')
});

// 
router.put('/places/:_id',
  (req, res, next) =>
{
  res.send('API endpoint that UPDATES the place with specified _id')
});

// 
router.delete('/places/:_id',
  (req, res, next) =>
{
  res.send('API endpoint that DELETES the place with specified _id')
});


module.exports = router
