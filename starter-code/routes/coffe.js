const express = require('express');
const router  = express.Router();
const Place   = require('../models/Place');


// GET places
router.get('/', (req, res, next) => {
  Place.find({})
  .then(places => {
    let placeObject = {places:places, action: '/coffe/new', button: 'Save', placesStr: JSON.stringify(places)}
    res.render('coffe/home', {placeObject})
  })
});

// POST new place
router.post('/new', (req, res, next) => {
  
  console.log(req.body);

  let coffe = {
    name: req.body.name,
    type: req.body.type,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }

  Place.create(coffe)
  .then(() => {
    res.redirect('/coffe');
  })
  .catch(err => console.log(err))
});


// Delete place
router.get('/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove({_id: req.params.id})
  .then(() => res.redirect('/coffe'))
  .catch(err => console.log(err))
});


// Edit place
router.get('/:id/edit', (req, res, next) => {
  let placeId = req.params.id;
  Place.find({})
  .then(places => {
    let placeToEdit = places.filter(place => {return place._id == placeId})
    let placeObject = {places:places, placeToEdit: placeToEdit, button: 'Update', action: `/coffe/${placeId}/edit`}
    res.render('coffe/home', {placeObject})
  })
  .catch(err => console.log(err))
});


// POST Edit place
router.post('/:id/edit', (req, res, next) => {

  console.log(req.params.id);
  console.log(req.body)

  Place.update({_id: req.params.id}, { $set: {name: req.body.name, type: req.body.type }})
  .then(() => {
    res.redirect('/coffe');
  })
  .catch((error) => {
    console.log(error);
  })

  // console.log('hola');
});






module.exports = router;
