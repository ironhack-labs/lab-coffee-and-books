const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/places', (req, res, next) => {
  res.render('places');
});

module.exports = router;
