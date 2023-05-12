const router = require("express").Router();
const Place = require('../models/Place.model')

router.get('/', (req, res, next) => {
    Place
    .find()
    .then(place =>  res.render('places/places', {place}))
    .catch(err => console.log(console.error())) 
})


 router.get('/create', (req, res, next) => {
    res.render('places/create-place')
})

router.post('/create', (req, res, next) => {
    const {name, type, latitude, longitude} = req.body

    console.log(latitude, longitude)

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
      }
    Place
    .create({name, type, location})
    .then(res.redirect('/places'))
    .catch(err =>console.log(err))

})

router.get('/:id', (req, res, next) => {
    const {id} = req.params
    Place
      .findById(id)
      .then(place => {
        res.render('places/places-detail', place)
    })
      .catch(err => console.log(err))
})


router.get('/:id/edit', (req,res,next) => {
    const {id} = req.params
    Place
    .findById(id)
    .then(
        place => {
            res.render('places/edit-place', place)
        }
    )
})

router.post('/:id/edit',(req, res, next) => {
    const {name, type, latitude, longitude} = req.body
    const {id} = req.params
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
      }
     Place
     .findByIdAndUpdate(id, {name, type, location})
     .then(() => res.redirect(`/places/${id}`))
     .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params
     Place
      .findByIdAndDelete(id)
      .then(() => res.redirect('/places'))
      .catch(err => console.log(err)) 
  }) 

module.exports = router;