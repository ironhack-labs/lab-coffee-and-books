const express = require('express');
const router  = express.Router();

const passport = require("passport");
const mongoose     = require('mongoose');
const Place = require("../models/place");


router.get('/', (req, res, next) => {
  Place.find()
  .then( places => {
    res.render('index', {places} );
  })
  .catch(error => { next(error) })
});

router.get('/show/:id', (req, res, next) => {
  Place.findById ({ _id: req.params.id })
  .then( place => {
    res.render('places/show', { place });
  })
  .catch(error => { next(error) })
});


module.exports = router;
