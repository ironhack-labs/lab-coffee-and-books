const express = require('express')
const router = express.Router()
const Place = require('../models/Place')


//LISTA DE LUGARES

router.get('/', (req, res, next)=>{
  Place.find()
  .then(places=>{
    console.log(places)
    res.render('places/list',{places})
  })
  .catch(e=>console.log(e))
})

//agregar un lugar

router.get ('/new', (req, res, next)=>{
  res.render('places/new')
})

router.post ('/new', (req, res, next)=>{
  Place.create(req.body)
  .then(place=>{
    res.redirect('/places')
  })
  .catch(e=>console.log(e))
})


//detail

router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Place.findById(id)
  .then(place=>{
    res.render('places/detail', place)
  })
  .catch(e=>console.log(e))
})

//editar- update

router.get('/edit/:id',(req, res, next)=>{
   const {id} = req.params
   Place.findById(id)
   .then(place=>{
    res.render('places/edit', place)
   })
})

router.post('/edit/:id',(req, res, next)=>{
  const {id} = req.params
  Place.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(place=>{
    res.redirect('/places')
  })
  .catch(e=>console.log(e))
})


//borrar

router.get('/delete/:id', (req, res, next)=>{
  const {id} = req.body
  Place.deleteOne(id)
  .then(place=>{
    res.redirect('/places')
  }).catch(e=>console.log(e))
})


module.exports = router