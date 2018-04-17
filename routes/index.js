// index.js
const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");


router.get("/",(req, res, next) => {

  Place.find()
  .then(place_data => {
      res.render('index', {place_data});
    })
});



module.exports = router;
