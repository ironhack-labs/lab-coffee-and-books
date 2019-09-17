const express = require('express');
const router  = express.Router();

router.use('/', require('./places.routes'))

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
