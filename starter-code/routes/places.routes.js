const express = require("express")
const router = express.Router()

const Places = require("../models/places.model")


// LISTADO DEL INDEX




router.get("/", (req, res) => {

  Places
    .find()
    .then(allPlaces => res.render('places/places-index', { allPlaces }))
    .catch(err => console.log(err))


})       


//NUEVO COFFEE

router.get("/new-places", (req, res) => res.render('places/new-places'))


router.post("/new-places", (req, res, next) => {
  
  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Places
    .create({ name, type, location })
    .then(() => res.redirect('/places'))
    .catch(err => next(err))

})


// EDITAR

router.get('/edit', (req, res) => {


  const placeID = req.query.id

  Places
    .findById(placeID)
    .then(placeInfo => res.render('places/edit', placeInfo))
    .catch(err => console.log(err))
})


router.post('/edit', (req, res) => {


  const placeID = req.query.id


  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }


  if (name === "" || latitude ==="" || longitude === "") {

    res.render("places/edit", { errorMsg: "Campos vacíos" })
    return

  }

  else {


    Places
      .findByIdAndUpdate(placeID, { name, type, location })
      .then(placeInfo => res.redirect('/'))
      .catch(err => console.log(err))
  }
})

//ELIMINAR


router.get('/delete', (req, res) => {


  const placeID = req.query.id

  Places
    .findByIdAndDelete(placeID)
    .then(placeInfo => res.render('places/places-index', placeInfo))
    .catch(err => console.log(err))
})




module.exports = router