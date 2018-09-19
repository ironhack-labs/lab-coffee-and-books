const express = require('express');
const router  = express.Router();
const Coffeeplace = require('../models/Coffeeplace');



router.get('/', (req, res, next) => {
  Coffeeplace.find().then( coffeeplaces => {
    res.render('coffeeplace', {
      coffeeplaces,
      restStr: JSON.stringify(coffeeplaces)
    });
  }).catch(e=> next(e));
});


router.get('coffeeplace', (req, res, next) => {
  res.render('bookstore');
});

router.post('coffeeplace', (req, res, next) => {

  let coffeeplace = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(book);
  CoffeeplaceBookstore.create(coffeeplace).then( coffeeplace => {
    res.redirect('/coffeeplace');
  }).catch(e=> next(e));
});


module.exports = router;
