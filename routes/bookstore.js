const express = require('express');
const router  = express.Router();
const Bookstore = require('../models/Bookstore');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/', (req, res, next) => {
  Bookstore.find().then( bookstores => {
    res.render('bookstore', {
      bookstores,
      restStr: JSON.stringify(bookstores)
    });
  }).catch(e=> next(e));
});


router.get('/bookstore', (req, res, next) => {
  res.render('bookstore');
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
  Bookstore.create(bookstore).then( bookstore => {
    res.redirect('/bookstore');
  }).catch(e=> next(e));
});


module.exports = router;
