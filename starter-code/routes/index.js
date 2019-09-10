const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.redirect('/places');
});

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/create', async (req, res, next) => {
  let {name, type, lat, lng} = req.body
  const place = {
    name,
    type,
    location: {
      type: "Point",
      coordinates : [lng, lat]
    }
  }
  Place.create(place).then(() => {
    res.redirect('/places');
  });
});

router.get('/places', (req, res, next) => {
  Place.find().then(places => {
    res.render('places', {places});
  });
});

router.get('/edit/:id', (req, res, next) =>{
  const {id} = req.params
  Place.findById(id)
  .then(place => {
    res.render('edit', {place})
  })
});

router.post('/edit/:id', (req, res, next) => {
  const {id} = req.params
  Place.findByIdAndUpdate(id, {$set: {...req.body}})
  .then(place => {
    res.redirect('/places');
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/delete/:id', (req, res, next) =>{
  const {id} = req.params
  Place.findByIdAndDelete(id)
  .then(place =>{
    res.redirect('/places');
  })
  .catch(err =>{
    console.log(err)
  })
})

module.exports = router;
