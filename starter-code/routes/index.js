const express = require('express');
const router  = express.Router();
const Place = require('../model/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//GET places page 
  router.get('/places', (req, res, next) => {
    Place.
      find()
      .then( response => {
        res.render('places', {data: response});
      })
      .catch( error => console.log(error))
  });
module.exports = router;
