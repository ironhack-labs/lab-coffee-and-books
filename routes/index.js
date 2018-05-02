const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find({}, (err, places)=>{
    res.render('index', {places});
  })
});

router.post('/', (req, res, next)=>{
  console.log(req.body)
Place.create(req.body)
     .then(r => {
       res.render('index');
     })
     .catch(e => next(e));
   });

module.exports = router;
