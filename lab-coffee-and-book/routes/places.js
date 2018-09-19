const express = require('express')
const router = express.Router()
const Place = require('../models/Place')

router.get('/',(req,res,next)=>{
  res.render('places/list')
})

//lista

router.get('/coffeelist', (req,res, next) =>{
  Place.find({tipo:{$ne: "BOOKSTORE"}})
  .then(places=>{
    res.render('coffee/coffeelist', {places})
  }).catch(e=>{
    console.log(e)
  })
})


///////////////////

router.get('/booklist', (req,res, next) =>{
  Place.find({tipo:{$ne: "COFFEE"}})
  .then(libros=>{
    res.render('book/booklist', {libros})
  }).catch(e=>{
    console.log(e)
  })
})


//detalle

router.get('/coffee-detail/:id',(req,res,next)=>{
  Place.findById(req.params.id)
  .then(place=>{
    res.render('coffee/coffee-detail',place )
  })
})

//

router.get('/book-detail/:id',(req,res,next)=>{
  Place.findById(req.params.id)
  .then(place=>{
    res.render('book/book-detail',place )
  })
})

//agregar
router.get('/new', (req,res,next)=>{
  res.render('new')
})

router.post('/new',(req,res,next)=>{
  Place.create(req.body)
  .then(place =>{
    res.redirect('/')
  }).catch(e=>next(e))
})

//update


module.exports = router