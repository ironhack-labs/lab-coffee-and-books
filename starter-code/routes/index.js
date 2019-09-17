const express = require('express');
const router  = express.Router();

router.use('/places', require('./places.routes'))

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
