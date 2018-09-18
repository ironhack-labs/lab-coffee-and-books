const express = require('express');
const router  = express.Router();
const Coffe = require('../models/coffe');



router.get('/', (req, res, next) => {
  Coffe.find().then( coffe => {
    res.render('coffe/coffeandbooks', {
      coffe,
      restStr: JSON.stringify(coffe)
    });
  }).catch(e=> next(e));
});


router.get('/new', (req, res, next) => {
  res.render('coffe/new');
});

router.post('/new', (req, res, next) => {

  let coffe = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
 
  Coffe.create(coffe).then( coffe=> {
    res.redirect('/coffe');
  }).catch(e=> next(e));
});


module.exports = router;