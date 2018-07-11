const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/new', (req,res, next) =>{
  res.render('places/new-place')
});

router.post('/new', (req,res)=>{
  Place.create(req.body)
  .then(plaplace=>{
    res.redirect('/list')
  }).catch(e=>{
    console.log(e);
  })
})

router.get('/list', (req, res)=>{
  Place.find()
    .then(plaplace=>{
      res.render('places/list', {plaplace})
    }).catch(e=>{
      console.log(e)
    })
})

router.get('/list/:id', (req, res)=>{
  Place.findById(req.params.id)
    .then(plaplace =>{
      res.render('places/place-detail', plaplace)
    }).catch(e=>{
      console.log(e)
    })
})



module.exports = router;
