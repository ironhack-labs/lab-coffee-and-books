const express = require('express');
const router  = express.Router();
const Places = require ("./../models/Places.model")

/* GET home page */
router.get('/places', (req, res, next) => {
  Places.find()
  .then(places => {
    res.json(places)
  })
});

module.exports = router;
