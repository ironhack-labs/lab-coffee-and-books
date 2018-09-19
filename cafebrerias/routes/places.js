const express = require('express')
const router = express.Router()
const Place = require("../models/Place")


router.get("/list",(req,res,next)=>{
  res.redirect("/places")
})
//lista

router.get('/',(req, res, next)=>{
  Place.find()
    .then(places=>{
      const promedio ={
        lat:0,
        lng:0,
        numPlaces: 0
      }
      for(i=0;i<places.length;i++){
        promedio.lat+=places[i].location.coordinates[1]
        promedio.lng+=places[i].location.coordinates[0]
        promedio.numPlaces++
      }
      promedio.lat/=places.length
      promedio.lng/=places.length
      res.render("places/list",{places:places,promedio})
    })
})

//detalle

router.get('/detail/:id', (req, res, next)=>{
  const {id} = req.params
  Place.findById(id)
    .then(place=>{
      res.render('places/detail',place)  
    })
    .catch(e=>next(e))
})

//agregar

router.get('/new', (req, res, next)=>{
  res.render('places/new')
})
router.post("/new",(req,res,next)=>{
  Place.create(req.body)
    .then(place=>{
      res.redirect("/places")
    })
    .catch(e=>next(e))
})

//update

router.get('/edit/:id', (req, res, next)=>{
  const {id}= req.params
  Place.findById(id)
  .then(place=>{
    res.render('places/edit',place)
  })
})
router.post("/edit/:id",(req,res,next)=>{
  const {id}= req.params
  Place.findByIdAndUpdate(id,req.body)
    .then(()=>{
      res.redirect("/places")
    })
    .catch(e=>next(e))
})

//delete
router.get('/delete/:id', (req, res, next)=>{
  const {id}= req.params
  Place.findByIdAndRemove(id)
  .then(()=>{
    res.redirect("/places")
  })
})

module.exports = router