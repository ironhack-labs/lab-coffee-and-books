const express = require('express');
const router  = express.Router();
const CoffeeAndBooks = require('../models/coffeeAndBooks');


router.get('/', (req, res, next) => {
  CoffeeAndBooks.find().then( coffeeAndBooks => {
    res.render('coffeeAndBook/list', {
      coffeeAndBooks,
      coffStr: JSON.stringify(coffeeAndBooks)
    });
  }).catch(e=> next(e));
});


router.get('/new', (req, res, next) => {
  res.render('coffeeAndBook/new');
});

router.post('/new', (req, res, next) => {

  let coffeeAndBook = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(coffeeAndBook);
  CoffeeAndBooks.create(coffeeAndBook).then( coffeeAndBook => {
    res.redirect('/coffeeAndBook');
  }).catch(e=> next(e));
});


module.exports = router;

