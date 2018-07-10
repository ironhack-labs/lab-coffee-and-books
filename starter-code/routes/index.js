const express = require('express');
const router  = express.Router();
const BookStore = require('../models/bookStore');

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
})

module.exports = router;
