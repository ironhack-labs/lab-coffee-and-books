const express = require('express');
const router  = express.Router();

// Load the Plac DB document mongoose modle
const Place = require('../models/Place')
// GET home page 
router.get('/',
  (_, res, next) =>
{
  Place.find({}, 
    (error, queryResults) =>
    {
      if(error) next(error)
      else res.render('index', {places: queryResults, gMapAPIKey: process.env.MAPS_API_KEY})
    }
    )
});

module.exports = router
