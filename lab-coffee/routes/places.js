const express = require('express')
const router = express.Router()

const Cafe = require('../models/Cafe')

//List
router.get('/', (req, res, next) => {
  Cafe.find()
  .then(cafes=>{
    res.render('places/list',{cafes});
  }).catch(e=>next(e))
  
});


//detail
router.get('/detail/:id', (req, res, next)=>{
  const {id}= req.params
  Cafe.findById(id)
  .then(cafes=>{
    res.render('places/detail', cafes)
  })
  .catch(e=>next(e))
})

//New
router.get('/new', (req, res, next)=>{
  res.render('places/new')
})

router.post('/new',(req,res,next)=>{
  Cafe.create(req.body)
  .then(cafe=>{
    res.redirect('/places')
  }).catch(e=>next(e))
})


//update

router.get('/edit/:id', (req,res,next)=>{
  const {id} = req.params
  Cafe.findById(id)
    .then(cafe=>{
      res.render('places/edit',cafe)
    }).catch(e=>next(e))
})

router.post('/edit/:id',(req,res,next)=>{
  const {id} = req.params
  Cafe.findByIdAndUpdate(id,{$set:req.body}, {new:true})
  .then(cafe=>{
    res.redirect(`/places/detail/${id}`)
  }).catch(e=>next(e))
})
//delete
router.get('/:id/delete',(req,res,next)=>{

  const {id} = req.params
  res.render('places/list')
})

router.post('/:id/delete', (req,res,next)=>{
  const {id} = req.params
  Cafe.findByIdAndRemove(id)
    .then(cafe=>{
      res.redirect('/places')
    }).catch(e=>next(e))
})
module.exports = router