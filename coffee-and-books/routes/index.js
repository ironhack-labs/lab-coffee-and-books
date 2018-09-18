const express = require('express');
const router  = express.Router();
const place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
