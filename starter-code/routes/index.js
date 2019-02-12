const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/places', (req, res, next) => {
  Place.find()
  .then(places => {
    res.render('places', {places})
  })
  .catch(err => {
    res.render('places', err)
  })
})

//
router.get('/places/detail/:id', (req,res,next) =>{
  const {id} = req.params
  Place.findById(id)
  .then(place => {
    res.render('detail', place)
  })
  .catch(err => {
    res.render('place', err)
  })
})

//delete place
router.get('/delete/:id', (req, res, next) => {
  const {id} = req.params
  console.log(id)
  Place.findByIdAndRemove(id, {new: true})
    .then(place => {
      res.redirect('/places', place)
    })
    .catch(err => {
      req.app.locals.error = err
    })
})

//create new place
router.get('/places/new', (req, res, next) => {
  const config = {
    action: "/places/new",
    submit: "New",
    name: '',
    stars: '',
  }
  res.render('new', config)
})

router.get('/places/edit/:id', (req, res, next) => {
  const {id} = req.params
  Place.findById(id)
  .then(place => {
    const config = {
      action: `/places/edit/${place._id}`,
      submit: "Update",
      name: place.name,
      stars: place.stars,
    }
    res.render('new', config)
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/places/edit/:id', (req, res, next) => {
  const {id} = req.params
  Place.findByIdAndUpdate(id, {...req.body}, {new: true})
  .then(() => {
    res.redirect(`/places/detail/${id}`)
  })
  .catch(err => {
    res.send(err)
  })
})



router.post('/places/new', (req, res, next) => {
  Place.create({...req.body})
  .then((place)=>{
    res.redirect(`/places/detail/${place._id}`)
  })
  .catch(err => {
    res.send(err)
  })
})


module.exports = router
