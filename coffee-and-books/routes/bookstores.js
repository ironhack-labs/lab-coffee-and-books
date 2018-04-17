const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('bookstores/index');
});

router.get('/new', (req, res, next) => {
  res.render('bookstores/new');
});

module.exports = router;
