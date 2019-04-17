const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

router.get("/places", (req, res) => {
  Place.find()
    .then(places =>{
  res.render('places', {places});

  })
  .catch(error => {
    console.log('Error while getting the places from the DB: ', error);
  })
});


router.get("/places/new", (req, res) => {
  res.render('places/new');
  })


router.get("/places/:id", (req, res) => {
  const id= req.params.id;
  Place.findById(id)
    .then(place =>{
  res.render('places/show', place);

  })
  .catch(error => {
    console.log('Error while getting the celebrities from the DB: ', error);
  })
});


  
router.post('/places', (req, res) => {
  const {name,type,timestamps} = req.body;
  const celebrity = {
    name,
    type,
    timestamps
  }
  const newPlace = new Place(place);
  newPlace.save()
  .then(() => {
    res.redirect("/places");
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/places/:id/delete', (req, res) => {
  const id = req.params.id;
  Place.findByIdAndRemove(id)
  .then(() =>{
    res.redirect("/places");
  })
  .catch((err) => {
    console.log("no se ha borrado");
  })
});

router.get('/places/:id/edit', (req,res) => {
  const id = req.params.id;
  Place.findById(id)
  .then(place =>{
    res.render('places/edit', place);
  })
  .catch((err) =>{
    console.log(err);
  })
})


router.post('/places/:id', (req, res) => {
  const {name,type,timestamps} = req.body;
  const place = {
    name,
    type,
    timestamps
  }
  const id = req.params.id;
  Place.findByIdAndUpdate(id, place)
  .then(() => {
    res.redirect("/places");
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;