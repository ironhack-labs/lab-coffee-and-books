const express = require('express');
const router  = express.Router();

const places = require('./places');
router.use('/', places);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
