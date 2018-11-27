const router = require('express').Router()
const Place = require('../models/Place')

router.get('/delete/:id', (req,res,next) => {
  const {id} = req.params
  Place.findByIdAndDelete(id)
  .then( deleted => {
    res.redirect('/places')
  })
  .catch(err => next(err))
})

router.get('/edit/:id', (req,res,next) => {
  const {id} = req.params
  let cafe, libros = false
  Place.findById(id)
  .then( place => {
    if(place.type === 'cofee shop') cafe = true
    else libros = true
    res.render('places/edit', {place,libros,cafe})
  })
  .catch(err => next(err))
})

router.post('/edit/:id', (req,res,next) => {
  const {id} = req.params
  const {name,type, latitude, longitude} = req.body  //book store
  Place.findByIdAndUpdate(id, {$set: {name, type, location:{coordinates: [longitude,latitude]}}})
  .then( placeUpdated => {
    res.redirect(`/places/detail/${placeUpdated._id}`)
  })
  .catch(error => next(error))
})

router.get('/detail/:id', (req,res,next) => {
  const {id} = req.params
  Place.findById(id)
  .then( place => {
    console.log(place)
    res.render('places/detail', place)
  })
  .catch( err => {
    next(err)
  })
})

router.get('/new', (req,res,next) => {
  res.render('places/new')
})

router.post('/new', (req,res,next) => {
  
  const placeLocated = {
    name: req.body.name,
    type: req.body.type,
    location: {
      type: "Point",
      coordinates: [req.body.longitude, req.body.latitude]
    }
  }

  Place.create(placeLocated)
  .then( place => {
    console.log(place)
    res.redirect('/places')
  })
  .catch( err => next(err))
})

router.get('/', (req,res,next) => {
  Place.find()
  .then( places => {
    res.render('places/list', {places})
  })
  .catch(err => next(err))
})

module.exports = router