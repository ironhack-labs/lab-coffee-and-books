var express = require('express');
var router = express.Router();

const Place = require('../models/place');

/* GET the db info and pass it to the frontEnd. */
router.get('/places', function (req, res, next) {
  Place.find()
    .then((response) => {
      res.json(response);
    })
    .catch(next);
});

module.exports = router;
