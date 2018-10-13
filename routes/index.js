const express = require('express');
const router  = express.Router();
const Place   = require(`../models/Place`);

/* GET home page */
router.get('/', (req, res, next) => {
  Place
    .find({kind: `coffee`})
    .then(coffees => {
      Place
        .find({kind: `book`})
        .then(books => res.render('index', {coffees, books}))
      ;
    })
  ;
});

router.get(`/coffee/new`, (req,res) => res.render(`newPlace`, {coffee:true}));
router.get(`/book/new`, (req,res) => res.render(`newPlace`));

// CREATE
router.post(`/coffee/new`, (req,res) => {
  let {kind, name, lat, lng} = req.body;
    if (typeof lat !== Number) lat = parseFloat(lat);
    if (typeof lng !== Number) lng = parseFloat(lng);

  let coordinates = [];
    coordinates.push(lng);
    coordinates.push(lat);

  const coffeeShop = {kind, name, location: {coordinates}};
  
  Place
    .create(coffeeShop)
    .then(() => res.redirect(`/`))
  ;
});

router.post(`/book/new`, (req,res) => {
  let {kind, name, lat, lng} = req.body;
    if (typeof lat !== Number) lat = parseFloat(lat);
    if (typeof lng !== Number) lng = parseFloat(lng);

  let coordinates = [];
    coordinates.push(lng);
    coordinates.push(lat);

  const bookStore = {kind, name, location: {coordinates}};
  
  Place
    .create(bookStore)
    .then(() => res.redirect(`/`))
  ;
});

// READ
router.get(`/details/:id`, (req,res) => {
  Place
    .findById(req.params.id)
    .then(place => res.render(`details`, {place}))
  ;
});

// UPDATE
router.post(`/update`, (req,res) => {
  Place
    .findByIdAndUpdate(req.body.id, {$set: req.body})
    .then(() => res.redirect(`/`))
  ;
})

// DELETE
router.post(`/delete`, (req,res) => {
  Place
    .findByIdAndRemove(req.body.id)
    .then(() => res.redirect(`/`))
  ;
});

// MAP
router.get(`/map`, (req,res) => {
  Place
    .find()
    .then(places => res.render(`map`, {places}))
  ;
});


module.exports = router;