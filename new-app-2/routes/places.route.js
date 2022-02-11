const router = require("express").Router()
const Place = require('../models/User.model')

//lista de mis sitios


router.get('/places', (req, res, next) => {

    Place
        .find()
        .then(places => {
            res.render('places', { places })
        })
        .catch(err => console.log('Oh! An error', err))
})


//crear nuevos sitios 

router.get('/places/create', (req, res, next) => {
  
  res.render('placescreate')
});

router.post('/places/create', (req, res, next) => {
 
  const { name, type, lat, lng } = req.body

  const location = { type : 'Point', coordinates: [ lat.toString(), lng.toString()]} 

    Place
    .create({ name, type, location })
    .then(() => res.redirect('/places'))
    .catch(err => {
      console.log('no se puede', err)
      res.render('placescreate')
    })
});


// BORRAR 
router.post('/:id/delete', (req, res) => { 
    const {id}= req.params
    Place.findByIdAndDelete(id)
     .then(() => res.redirect("/place"))
    .catch((err) => next(err)) 
})

// EDITAR LUGARES 

router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params
  Place.findById(id)
    .then((place) => res.render('updateplaces', place))
    .catch((err) => next(err))
})

router.post('/edit', (req, res) => {
  const { id } = req.query

  const { name, type, lat, lng } = req.body

  const location = {
    type: 'Point',
    coordinates: [lat.toString(), lng.toString()],
  }

  Place.findByIdAndUpdate(id, { name, type,location }, { new: true })
    .then(() => res.redirect(`/place`))
    .catch((err) => next(err))
})

module.exports = router;


