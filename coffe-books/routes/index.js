const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/new', (req,res,next)=>{
  res.render('places/place-form');
});

router.post('/new', (req,res,next)=>{
  Place.create(req.body)
    .then(result=>{
      res.redirect('/list');
    })
    .catch(e=>next(e));
});

router.get('/list', (req,res,next)=>{
  Place.find({})
    .then(lista=>{
      res.render('places/lista', {lista});
    })
    .catch(e=>next(e));
});

router.get('/place/:id', (req,res,next)=>{
  let placeId = req.params.id;
  Place.findById(placeId)
    .then(place=>{
      res.render('places/place-description', place);
    })
    .catch(e=>next(e));
});

module.exports = router;
