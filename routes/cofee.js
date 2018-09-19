const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');



router.get('/', (req, res, next) => {
  Place.find().then( cofees => {
    res.render('cofees/list', {
      cofees,
      cofStr: JSON.stringify(cofees)
    });
  }).catch(e=> next(e));
});


router.get('/new', (req, res, next) => {
  res.render('cofees/new');
});

router.post('/new', (req, res, next) => {

  let cofee = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(cofee);
  Place.create(cofee).then( cofee => {
    res.redirect('/cofees');
  }).catch(e=> next(e));
});


module.exports = router;