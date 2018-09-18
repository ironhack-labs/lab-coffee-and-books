const express = require('express');
const router  = express.Router();
const Coffee = require('../models/Coffee');



router.get('/', (req, res, next) => {
  Coffee.find().then( coffees => {
    res.render('coffee/list', {
      coffees,
      restStr: JSON.stringify(coffees)
    });
  }).catch(e=> next(e));
});


router.get('/new', (req, res, next) => {
  console.log("entraaaaa")
  res.render('coffee/new');
});

router.post('/new', (req, res, next) => {

  let coffee = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(coffee);
  Coffee.create(coffee).then( coffee => {
    res.redirect('/coffee');
  }).catch(e=> next(e));
});


module.exports = router;
