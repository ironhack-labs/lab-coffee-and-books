const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/list', (req, res)=>{
  Place.find()
    .then(cofs=>{
      res.render('coffees/list', {cofs})
    }).catch(e=>{
      console.log(e)
    })
})

router.get('/new', (req, res, next)=>{
  res.render('coffees/new')  
})

router.post('/new', (req, res)=>{
  console.log(req.body);
  Place.create(req.body)
    .then(place=>{
      console.log(place);
      res.redirect('/list')
    }).catch(e=>{
      console.log(e)
    })
})

router.get('/list/:id', (req, res)=>{
  Place.findById(req.params.id)
    .then(place=>{
      res.render('coffees/detail', place)
    }).catch(e=>{
      console.log(e)
    })
})



module.exports = router;