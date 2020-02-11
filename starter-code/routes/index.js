const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/new', (req,res,next) => {
  res.render('new')
});

module.exports = router;
