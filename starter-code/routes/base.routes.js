const { query } = require('express')
const express = require('express')
const router = express.Router()
const Place = require('../models/place')
// Endpoints
//index
router.get('/', (req, res) =>{ 
  
  Place.find()
  .then(place => {res.render('index',{place})})
  .catch(err => console.log('ERROR:', err))
})
//mostrar lista
router.get('/lista', (req, res) =>{ 
  
  Place.find()
  .then(place => {res.render('sitios',{place})})
  .catch(err => console.log('ERROR:', err))
})

//nuevo
router.get('/new', (req, res) =>{res.render('new')})
 
router.post('/new', (req, res) =>{ 
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
}
  const{name,type,latitude,longitude} = req.body
  Place.create({name,type,location})
  .then(()=>res.redirect('/'))
  .catch(err => console.log('ERROR:', err))
})
//detalles
router.get('/:id/details', (req, res) =>{ 
  const id = req.params.id
  Place.findById(id)
  .then(place => {res.render('details',place)})
  .catch(err => console.log('ERROR:', err))
})
//borrar
router.get('/:id/delete',(req,res) => {
  const id = req.params.id

Place.findByIdAndRemove(id)
.then(()=>res.redirect('/lista'))
.catch(err => console.log('ERROR:', err))
})
//update
router.post('/:id/details',(req,res) => {
  const id = req.params.id
  const  {name,type} = req.body

      Place.findByIdAndUpdate(id,{name,type})
      .then(()=>res.redirect('/lista'))
      .catch(err => console.log('ERROR:', err))
})
module.exports = router
