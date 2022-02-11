const router = require("express").Router();

const Place = require('../models/Place.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


// CREAR ESTABLECIMIENTO
router.get("/establecimientos/crear", (req, res, next) => {
  res.render("places/create-place");
});

router.post('/establecimientos/crear', (req, res) => {
  const { name, type, lat, lng } = req.body

  const location = {

    type: 'Point',
    coordinates: [lat, lng]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/establecimientos/listado'))
    .catch(err => next(err))
})


//LISTADO DE LUGARES
router.get("/establecimientos/listado", (req, res, next) => {
  Place
    .find()
    .then(places => res.render("places/list-places", { places }))
    .catch(err => next(err))
});


//EDITAR LUGARES
router.get("/establecimientos/:_id/editar", (req, res, next) => {
  const { _id } = req.params
  Place
    .findById({ _id })
    .then(place => res.render("places/edit-place", place))
    .catch(err => next(err))
});

router.post("/establecimientos/:_id/editar", (req, res, next) => {
  const { _id } = req.params
  const { name, type } = req.body
  Place
    .findByIdAndUpdate(_id, { name, type }, { new: true })
    .then(() => res.redirect("/establecimientos/listado"))
    .catch(err => console.log(err))
});

//ELIMINAR LUGARES
router.post("/establecimientos/:_id/eliminar", (req, res, next) => {
  const { _id } = req.params
  Place
    .findByIdAndDelete(_id)
    .then(() => res.redirect("/establecimientos/listado"))
    .catch(err => console.log(err))
})


// MAPA
router.get("/establecimientos/mapa", (req, res, next) => {
  res.render("map/map-place")
})


module.exports = router;
