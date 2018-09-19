const express = require('express');
const router  = express.Router();
const Bookstore = require('../models/Bookstore');
const mongoose     = require('mongoose');


/* GET home page */
router.get('/', (req, res, next) => {
  Bookstore.find().then( bookstores => {
    res.render('bookstore/list', {
      bookstores,
      restStr: JSON.stringify(bookstores)
    });
  }).catch(e=> next(e));
});

router.get('/new', (req, res, next) => {
  res.render('bookstore/new');
});

router.post('/new', (req, res, next) => {

  let bookstore = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }

  Bookstore.create(bookstore).then( bookstore => {
    res.redirect('/bookstore/list');
  }).catch(e=> next(e));
});


module.exports = router;