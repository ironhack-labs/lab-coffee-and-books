const express = require('express');
const router  = express.Router();
const Places = require('../models/Places')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/list', (req, res)=>{
  Places.find()
    .then(places=>{
      res.render('places/list', {places})
    }).catch(e=>{
      console.log(e)
    })
})

router.get('/new', (req, res, next)=>{
  res.render('places/places-form')  
})

router.post('/new', (req, res)=>{
  Places.create(req.body)
    .then(places=>{
      res.redirect('/list')
    }).catch(e=>{
      console.log(e)
    })
})

router.get('/list/:id', (req, res)=>{
  Places.findById(req.params.id)
    .then(places=>{
      res.render('places/places-detail', places)
    }).catch(e=>{
      console.log(e)
    })
})



module.exports = router;

