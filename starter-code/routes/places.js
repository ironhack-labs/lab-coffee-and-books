const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

router.get('/new', (req, res, next) => {
  const action = `/places/new`
  res.render('places/new',{action});
});

// router.post('/new', (req, res, next) => {
//   Place.create(req.body)
//   .then(place=>{
//     res.redirect('/places')
//   }).catch(e=>next(e))
// });

router.post('/new', (req, res, next) => {
  const p = {
    name:req.body.name,
    tipo:req.body.tipo,
    location:{
      type:"Point",
      coordinates:[
        req.body.lng,
        req.body.lat
      ]
    }
  }
  Place.create(p)
  .then(place=>{
    res.redirect('/places')
  })
});

router.get('/detail/:id', (req, res, next) => {
  Place.findById(req.params.id)
  .then(place=>{
    res.render('places/detail',place)
  }).catch(e=>next(e))
});

router.get('/delete/:id', (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
  .then(place=>{
    res.redirect('/places')
  }).catch(e=>next(e))
});

router.get('/update/:id', (req, res, next) => {
  Place.findById(req.params.id)
  .then(place=>{
    const action = `/places/update/${req.params.id}`
    res.render('places/new',{place, action})
  }).catch(e=>next(e))
});

router.post('/update/:id', (req, res, next) => {
  console.log(req.body)
  const newbody = {
    name:req.body.name,
    tipo:req.body.tipo,
    location:{
      type:"Point",
      coordinates:[
        req.body.lng,
        req.body.lat
      ]
    }
  }
  Place.findByIdAndUpdate(req.params.id,{$set:newbody},{new:true})
  .then(place=>{
    res.redirect(`/places/detail/${req.params.id}`)
  }).catch(e=>next(e))
});

router.get('/', (req, res, next) => {
  Place.find()
  .then(places=>{
    res.render('places/list',{places})
  }).catch(e=>next(e))
});

module.exports = router;
