const express = require('express');
const router = express.Router();
const Place = require('../models/place.model')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// to see raw data in your browser, just go on: http://localhost:3000/api
// router.get('/api', (req, res, next) => {
//   Place.find()
//     .then(api => res.status(200).json({ places: api }))
//     .catch(err => console.log(err))
// })



module.exports = router;
