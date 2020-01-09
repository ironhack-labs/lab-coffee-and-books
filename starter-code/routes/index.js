const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET input page */
router.get('/input', (req, res, next) => {
  res.render('input');
});

// Get information from input page
router.get('/input/edit', (req, res, next) => {
});

// Get information from input page
router.post('/input/edit', (req, res, next) => {
  placeSchema(name: this.name, type: this.`input/type`, timestamp: Date.now())
});

module.exports = router;