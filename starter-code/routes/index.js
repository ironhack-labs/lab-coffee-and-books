const express = require('express');

const router  = express.Router();

router.use('/', require('./bookstore'));
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
