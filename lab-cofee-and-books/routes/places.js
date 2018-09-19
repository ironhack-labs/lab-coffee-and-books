const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

//Index
router.get('/',(req, res, next)=>{
  Place.find()
  .then(places=>{
    res.render ('places/list',{places})
  })
})

//detalle
router.get('/detail/:id', (req, res, next)=>{
  const {id} = req.params
  Place.findById(id)
  .then(places =>{
    res.render('places/detail',places)
  }) .catch(e=>next(e))
})

//agregar

router.get('/new', (req, res, next)=>{
  res.render('places/new')
})

router.post('/new', (req, res, next)=>{
  Place.create(req.body)
  .then (places=>{
    res.redirect('/places')
  }).catch(e=>next(e))
})

// Modificar Lugares - UPDATE
router.get ('/edit/:id',(req,res,next)=>{
  const {id} = req.params
  Place.findById(id)
  .then (places =>{
    res.render('places/edit-form',places)
  }) .catch(e=>next(e))
})

router.post('/edit/:id',(req,res,next)=>{
  const {id} = req.params
  Place.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then (places =>{
    res.redirect(`/places/detail/${id}`)
  }) .catch(e=>next(e))
})

// Delete 

router.get('/:id/delete',(req,res,next)=>{
  const {id} = req.params
  res.render('places/')
})
 router.post('/:id/delete', (req,res,next)=>{
  const {id} = req.params
  Place.findByIdAndRemove(id)
    .then(places=>{
      res.redirect('/places')
    }).catch(e=>next(e))
})

module.exports = router;