const express = require('express');
const router  = express.Router();
const Coffee = require('../models/Coffee')

/* GET home page */

router.get('/', (req, res, next)=>{
  Coffee.find()
  .then(coffee=>{
    res.render('index', {coffee})
  })
})


//detalle




router.get('/detail', (req, res, next)=>{
  res.render('detail')
})


router.post('/detail', (req, res, next)=>{
  Coffee.create(req.body)
  .then(coffee=>{
    res.redirect('/')
  })
})


//Lista


router.get('/new/:id', (req, res, next )=>{
  const {id} = req.params
  Coffee.findById(id)
  .then(coffees =>{
    res.render('new', coffees)
  }). catch(e=>next(e))
})


 module.exports = router;



