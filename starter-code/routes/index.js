const express = require('express');
const router  = express.Router();
const Places = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/create', (req, res, next) => {
  res.render('create');
});

module.exports = router;
