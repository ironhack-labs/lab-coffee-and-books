const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')



router.get('/', (req, res, next) => {
 Place.find()
 .then(places => { res.render('places/places', {places})})
 .catch(err   =>  next(err))
})


// Create new place
router.get('/new', (req, res, next) => {res.render('places/new')})
  
router.post('/new', (req, res, next) => {
  
    const {name, type, latitude, longitude} = req.body

    let location = {
        type: "point",
        coodinates: [longitude, latitude]
    }

 const newPlace = new Place({name, type, location}) // newPlace is instace of Place module

  newPlace.save()
  .then( places => res.redirect('/places'))
  .catch(err => next(err))})



// Edit new place   
router.get('/edit/:id', (req, res, next ) => res.render("places/edit", {id: req.params.id}))

router.post('/edit/:id', (req, res, next) => {  
 const {name, type, location } = req.body

 console.log(name, type, req.params.id)

//  $set  replaces the value of a field with the specified value


 Place.findByIdAndUpdate({_id: req.params.id},  { $set: {name, type, location }})
 .then(place  => res.redirect('/places'))
 .catch(err =>  next(err))
})


// Delete
router.get('/delete/:id', (req, res, next) => {

 Place.findByIdAndDelete(req.params.id)
 .then(() => res.redirect('/places'))
 .catch(err =>  next(err))
})






module.exports = router