const express = require('express');
const router  = express.Router();

const Place = require('../models/place.model')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('place/place-index');
});

router.get('/list', (req, res) => {
  Place.find()
    .then(allPlaces => res.render('place/place-list', { places: allPlaces }))
    .catch(err => console.log("Error consultadno las places en la BBDD: ", err))
})

router.get('/details/:id', (req, res) => {

  const id = req.params.id

  Place.findById(id)
    // .populate('author')
    .then(thePlace => res.render('place/place-detail',thePlace))
    .catch(err => console.log("Error consultando place por ID en la BBDD",err))
})

router.get('/add', (req, res) => res.render('place/place-form'))
router.post('/add',(req,res) => {
  
  const location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}

  const { name, type,} = req.body

  Place.create({ name, type, location})
    .then(() => res.redirect('/places/list'))
    .catch(err => console.log("Error creando place en la BBDD",err))

})

router.post('/delete/:id',(req,res) => {

  const id = req.params.id

  Place.findByIdAndDelete(id)
    .then((x)=> res.redirect('/places/list'))
    .catch(err => console.log("ha ocurrido un error eliminando de la bbdd",err))
})

router.get('/edit/:id', (req, res) => {

  const id = req.params.id

  Place.findById(id)
    .then(thePlace => res.render('place/place-edit',thePlace))
    .catch(err => console.log("Error consultando place por ID en la BBDD",err))
})

router.post('/edit/:id', (req,res) =>{

  console.log(req.body)

  const newPlace = {
    name : req.body.name,
    type : req.body.type,
    location : {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    }
  }

  // res.render('place/place-list')

  Place.findByIdAndUpdate(req.params.id,newPlace)
    .then((x)=> res.redirect(`/places/details/${req.params.id}`))
    .catch(err => console.log("ha ocurrido un error editando de la bbdd",err))

  // Place.findOneAndUpdate(req.params.id)
})

router.get('/api', (req, res, next) => {
	Place.find()
		.then(allPlacesFromDB => res.json(allPlacesFromDB))
		.catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {
	Place.findById(req.params.id)
		.then(thePlace => res.json(thePlace))
		.catch(err => next(err))
})



module.exports = router;