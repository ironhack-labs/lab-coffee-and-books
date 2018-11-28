const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');




router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {
  const places = {
      name: req.body.name,
      type: req.body.type,
      location: {
        type: 'Point',
        coordinates: [0,0]
      }
  };
  Place.create(places).then(res.redirect('/places/list'))
  .catch(err=>{
      console.log(err)
  })
});




router.get('/list', (req, res, next) => {
  Place.find()
  .then(places=>{
    res.render('list', {places});
  }).catch(err=>{
    console.log(err)
  })
});

router.get('/list/:id', (req, res, next) => {
  const id = req.params.id
  Place.findById(id)
  .then(place =>{
    res.render('detail', place)
  }).catch(err=>{
    console.log(err)
  })
});

router.get('/update/:id', (req, res, next) => {
  const id = req.params.id
  Place.findById(id)
  .then(place =>{
    res.render('update', place)
  }).catch(err=>{
    console.log(err)
  })
});

router.post('/update/:id', (req,res,next) =>{
  const id = req.params.id
  const {name,type,lat,long} = req.body
  console.log(req.body.name)
  Place.findByIdAndUpdate(id, {name,type,lat,long},{new:true}, null)
  .then(place=>{
    res.redirect(`/places/list/${id}`)
  }).catch(err=>{
    console.log(err)
  })
})


router.get("/delete/:id", (req, res, next) => {
  const id = req.params.id;
  Place.findByIdAndDelete(id)
    .then(places => {
      res.redirect("/places/list/");
    })
    .catch(e => next(e));
});

module.exports = router;
