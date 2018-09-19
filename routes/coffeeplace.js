const express = require('express');
const router  = express.Router();
const coffeeplace = require('../models/Coffeeplace');
const mongoose     = require('mongoose');


/* GET home page */
router.get('/', (req, res, next) => {
  coffeeplace.find().then( coffeeplaces => {
    res.render('coffeeplace/list', {
      coffeeplace,
      restStr: JSON.stringify(coffeeplaces)
    });
  }).catch(e=> next(e));
});

router.get('/new', (req, res, next) => {
  res.render('coffeeplace/new');
});

router.post('/new', (req, res, next) => {

  let coffeeplace = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }

  coffeeplace.create(coffeeplace).then( coffeeplace => {
    res.redirect('/coffeeplace/list');
  }).catch(e=> next(e));
});


module.exports = router;