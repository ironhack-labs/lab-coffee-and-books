const express = require('express');
const router  = express.Router();
const Place   = require('../models/Place')

/* GET home page */
router.get('/:id', (req, res, next) => {
  Place.findById(req.params.id)
  .then(place=>initMap(place.location))
  Place.find()
  .then(place=>res.render('index',{place}))
  .catch(e=>console.log(e))
});

router.get('/', (req, res, next) => {
  Place.find()
  .then(place=>res.render('index',{place}))
  .catch(e=>console.log(e))
});

router.get('/add', (req, res, next) => {
  res.render('add')
});

router.post('/add', (req, res, next) => {
  Place.create(req.body)
  .then(()=>res.redirect('/'))
  .catch(e=>console.log(e))
});

module.exports = router;
