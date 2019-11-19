const express = require('express');
const router  = express.Router();
const Places = require(`../models/place`)

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
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
