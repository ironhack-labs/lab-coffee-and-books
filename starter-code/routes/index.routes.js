const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/list', (req, res, next) => {
  res.render('places/list');
});
router.get('/new', (req, res, next) => {
  res.render('places/new');
});
router.get('/update/:id', (req, res, next) => {
  res.render('places/update')
});

module.exports = router;
