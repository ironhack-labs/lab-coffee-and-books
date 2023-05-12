const express = require('express');
const router = express.Router();


router.get('/mapa', (req, res, next) => {
  res.render('places/places-map-page')
})


module.exports = router