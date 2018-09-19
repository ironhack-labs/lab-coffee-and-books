const express = require('express')
const router = express.Router()
const Place = require('../models/Place')

router.get('/',(req, res, next)=>{
  Place.find()
  .then(places=>{
    res.render('place/list',{places})
  })
  .catch(e=>console.log(e))
})

router.get('/signup',(req,res,next)=>{
  res.render('place/signup')
})

router.post('/signup',(req,res,next)=>{
  Place.create(req.body)
  .then(place=>{
    res.redirect('/')
  })
  .catch(e=>console.log(e))
})

router.get('/detail/:id',(req,res,next)=>{
  const {id} = req.params
  Place.findById(id)
  .then(place =>{
    res.render('place/detail',place)
  })
  .catch(e=>console.log(e))
})

router.get('/delete/:id',(req,res,next)=>{
  const {id} =req.params
  Place.findByIdAndRemove(id)
  .then(place=>{
    res.redirect('/')
  })
  .catch(e=>console.log(e))
})

router.get('/edit/:id',(req,res,next)=>{
  const {id} = req.params
  Place.findById(id)
  .then(place => {
    res.render('place/edit',place)
  })
  .catch(e=>console.log(e))
})

router.post('/edit/:id',(req,res,next)=>{
  const{id} = req.params
  Place.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(place =>{
    res.redirect('/')
  })
  .catch(e=>console.log(e))
})

module.exports = router