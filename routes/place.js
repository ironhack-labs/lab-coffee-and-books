const express = require('express')
const router = express.Router();
const Place = require('../models/Place')

router.post('/new', (req,res,next)=>{
  const p = {
    name: req.body.name,
    location: {
      type:"Point",
      coordinates: [req.body.lng, req.body.lat]
    },
    kind: req.body.kind
  };
  Place.create(p).then(place=>{
    res.redirect("/place/" + place._id);
  })
})

router.get('/new', (req,res,next)=>{
  res.render('place/new')
})

router.get('/:id', (req,res)=>{
  Place.findById(req.params.id).then(place =>{
    res.render('place/detail', place)
  })
})

router.get('/', (req,res)=>{
  Place.find().then(place=>{
    res.render('place/list', {places: place});
  })
})

router.get('/delete/:id', (req, res, next)=>{
  const {id} = req.params
  Place.findByIdAndRemove(id)
    .then(place =>{
      res.send(`Places ${place.name} deleted`)
    })
    .catch(e=>{
      next(e)
    })
})

router.get('/:id/edit',(req,res,next) =>{
  const {id} = req.params
  Place.findById(id)
      .then(place => {
          res.render('place/edit', place)
      })
      .catch(e => {
          next(e)
      })
})

router.post('/:id', (req,res)=>{
  const {id} = req.params;
  const {name, kind,} = req.body
  Place.findOneAndUpdate(id,{ $set: {name, kind}})
  .then(place =>{
    res.redirect('list')
  })
  .catch(e=>{
    console.log(e)
  })
})

module.exports = router;