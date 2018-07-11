const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get ('/new', (req,res)=>{
res.render('new')
});

router.post('/new',(req,res,next)=>{
  Place.create(req.body)
  .then(place=>{
    res.redirect('/list')
  })
  .catch(e=>{
    console.log(e)
  })
})

router.get('/list', (req, res)=>{
  Place.find()
    .then(lugar=>{
      res.render('list', {lugar})
    }).catch(e=>{
      console.log(e)
    })
})

router.get('/list/:id', (req, res)=>{
  Place.findById(req.params.id)
    .then(lugar=>{
      res.render('place-detail', lugar)
    }).catch(e=>{
      console.log(e)
    });
  });

module.exports = router;
