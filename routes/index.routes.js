const router = require("express").Router();
const Place = require('../models/Place.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



// Crear cafeteria


router.get("/crear", (req, res, next) => res.render('coffee/new-coffee'))

router.post("/crear", (req, res, next) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type, location })
    .then(place => res.redirect('/'))
    .catch(err => console.log(err))
})

// Mostrar lugares 

router.get("/listado", (req, res, next) => {

  Place
    .find()
    .then(place => {
      res.render('coffee/coffee-list', { place })
    })
    .catch(err => console.log(err))
});

// Editar lugares
router.get('/editar/:id', (req, res) => {

  const { id } = req.params

  Place
    .findById(id)
    .then(place => res.render('coffee/edit-coffee', place))
    .catch(err => console.log(err))
})

router.post('/editar/:id', (req, res) => {

  const { name, type } = req.body
  const { id } = req.params

  Place
    .findByIdAndUpdate(id, { name, type })
    .then(() => res.redirect('/listado'))
    .catch(err => console.log(err))
})

// Borrar lugares

router.post('/eliminar/:id', (req, res) => {
  const { id } = req.params

  Place
    .findByIdAndDelete(id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// COffee map


router.get("/mapa", (req, res, next) => {
  res.render("coffee/coffee-map")
})

// Api Maps

router.get('/api/place', (req, res) => {

  Place
    .find()
    .then(place => res.json(place))
    .catch(err => res.json({ Message: 'server error', err }))
})


module.exports = router;