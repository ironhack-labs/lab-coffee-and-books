const express = require('express');
const router  = express.Router();
const places = require("../models/Places");

/* GET home page */
router.get('/', (req, res, next) => {
  places.find()
  .then((placesFound) => {
    res.render('index', { placesFound })
  })
});


router.get('/allPlaces',(req, res, next) =>{
  places.find()
  .then((placesFound) =>{
    res.json(placesFound)
  })
})
module.exports = router;
