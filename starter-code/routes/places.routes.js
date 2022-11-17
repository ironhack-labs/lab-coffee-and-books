const router = require("express").Router()
const Place = require("../models/Place.model")



// Crear
router.get('/create', (req, res) => {
  res.render('places/create')
})



router.post('/create', (req, res) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect(`/place/list`))
    .catch(err => console.log(err))
})



//  list
router.get('/list', (req, res) => {

  Place
    .find()
    .select({ name: 1 })
    .then(place => {
      res.render('places/list', { place })
    })
    .catch(err => console.log(err))
})


// Edit

router.get('/edit/:id', (req, res) => {

  const { id: place_id } = req.params

  Place
    .findById(place_id)
    .then(place => {
      res.render('places/edit', place)
    })
    .catch(err => console.log(err))
})



router.post('/edit/:id', (req, res) => {

  const { id: place_id } = req.params
  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }


  Place
    .findByIdAndUpdate(place_id, { name, type, location })
    .then(() => res.redirect(`/place/list`))
    .catch(err => console.log(err))
})


// Delete
router.post('/delete/:id/', (req, res) => {

  const { id: place_id } = req.params

  Place
    .findByIdAndDelete(place_id)
    .then(() => res.redirect('/place/list'))
    .catch(err => console.log(err))

})





module.exports = router