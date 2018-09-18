const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');



router.get('/', (req, res, next) => {
  Place.find().then( books => {
    res.render('books/list', {
      books,
      booStr: JSON.stringify(books)
    });
  }).catch(e=> next(e));
});


router.get('/new', (req, res, next) => {
  res.render('books/new');
});

router.post('/new', (req, res, next) => {

  let book = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(book);
  Place.create(book).then( book => {
    res.redirect('/book');
  }).catch(e=> next(e));
});


module.exports = router;