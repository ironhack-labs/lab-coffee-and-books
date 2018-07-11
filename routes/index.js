const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/new', (req, res)=>{
  res.render('new')  
})


router.post('/new', (req, res, next)=>{
  Place.create(req.body)
    .then(places=>{
      res.redirect('/list')
    }).catch(e=>{
      console.log(e)
    })
})

router.get('/list', (req, res)=>{
  Place.find()
    .then(places=>{
      res.render('list', {places})
    }).catch(e=>{
      console.log(e)
    })
})

router.get('/list/:id', (req, res)=>{
  Place.findById(req.params.id)
    .then(places=>{
      res.render('place-detail', places)
    }).catch(e=>{
      console.log(e)
    })
})

 
module.exports = router;
