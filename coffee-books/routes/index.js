const express = require('express');
const router  = express.Router();
const Coffee = require('../models/Coffee')


router.get('/', (req,res,next)=>{
  Coffee.find()
    .then(coffees=>{
      res.render('index',{coffees})
    })
})


router.get('/new',(req,res,next)=>{
  res.render('coffee/nuevo')
})

router.post('/new',(req,res,next)=>{
  Coffee.create(req.body)
  .then(coffee =>{
    res.redirect('/')
  })
})

router.get('/detail/:id', (req, res, next)=>{
  const{id} = req.params
  Coffee.findById(id)
  .then(detail=>{
    res.render('coffee/detail',detail)
  }).catch(e=>{
    console.log(e)
    next(e)
  })
})



module.exports = router;
