const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');


/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then( places => {
    console.log(places);
    res.render('index', {places:JSON.stringify(places)});
  })
});


/* C(R)UD: Retrieve -> List all books */
router.get('/places', (req, res, next) => {
  Place.find({}).then( places => {
    res.render('places/list', {places});
  })
});


/* (C)RUD: Add a book form */
router.get('/places/add', (req, res, next) => {
  res.render('places/add');
});


router.post("/places/add", (req, res, next) => {
  const {name, kind, lat, long} = req.body;
  new Place ({name, kind, location:{type:"Point", coordinates:[lat, long]}})
  .save().then( place => {
    console.log("Place created!");
    res.redirect("/")
  }).catch(e=>{
    console.log(e.message);
    res.redirect('/places/add')
  })

});


module.exports = router;

