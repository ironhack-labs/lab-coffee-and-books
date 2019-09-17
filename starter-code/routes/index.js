const express = require('express');
const router = express.Router();

router.use('/', require('./place.routes'));
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
