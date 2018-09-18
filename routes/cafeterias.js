const express = require('express');
const router  = express.Router();
const Cafeterias = require('../models/cafeterias');



router.get('/', (req, res, next) => {
  Cafeterias.find().then( cafeterias => {
    res.render('cafeteria/list', {
      cafeterias,
      cafStr: JSON.stringify(cafeterias)
    });
  }).catch(e=> next(e));
});


router.get('/new', (req, res, next) => {
  res.render('cafeteria/new');
});

router.post('/new', (req, res, next) => {

  let cafeteria = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(cafeteria);
  Cafeterias.create(cafeteria).then( cafeteria => {
    res.redirect('/cafeteria');
  }).catch(e=> next(e));
});


module.exports = router;
