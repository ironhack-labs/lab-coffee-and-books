require('dotenv').config();

const express = require('express');
const router  = express.Router();
const Places = require(`../models/place`)
let apiUrl;
let apiKey = process.env.GOOGLE_MAPS_API_KEY;


/* GET home page */
router.get('/', (req, res, next) => {
  apiUrl=`https://maps.googleapis.com/maps/api/js?key=${apiKey}`
  res.render('index', {apiUrl});
});


// this serves the airports json
router.get("/places-data", (req, res) => {

  Places
  .find()
  .then(placesData => {
    res.json(placesData);
  })

});




module.exports = router;
