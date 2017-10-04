var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Placemodel = require('../models/place')
// view engine setup
/* GET home page. */

router.get('/', (req, res, next) => {
  Placemodel.find({}, (err, Place) => {
      if (err) {
        return next(err)
      };
      res.render('index', {Place}
    )
  })
})

router.post('/', (req, res, next) => {
  const {name,lat,lng,description} = req.body

  const newPlace = new Placemodel({
    name,
    description,
    location: [lng,lat],
  })
  Placemodel.save((err) => {
    if (err) {return next(err)}
    else {
      res.redirect('/');
    }
  })
})







module.exports = router;
