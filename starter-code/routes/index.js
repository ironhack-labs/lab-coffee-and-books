const express = require('express');
const router  = express.Router();
const BookStore = require('../models/bookStore');
const CoffeeStore = require('../models/coffeeStore');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/bookStores', (req, res, next) => {
  BookStore.find()
  .then(bookStores => {
      res.render('bookStores/list', {bookStores});
  })
  .catch(err => next())
});

router.get('/coffeeStores', (req, res, next) => {
  CoffeeStore.find()
  .then(coffeeStores => {
      res.render('coffeeStores/list', {coffeeStores});
  })
  .catch(err => next())
});

module.exports = router;
