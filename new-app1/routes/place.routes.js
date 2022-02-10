const router = require("express").Router()

const Place = require('./../models/place.model')

//List of places
router.get("/sitios", (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/places-list', { places }))
        .catch(err => console.log(err))
})


// Create new place
router.get("/crear", (req, res, next) => res.render("places/new-place"))

router.post("/crear", (req, res, next) => {

    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    
    Place
        .create({ name, type, location })
        .then(place => res.redirect('/sitios'))
        .catch(err => console.log(err))
})

// Update new place
router.get("/editar/:id", (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/edit-place', { place }))
        .catch(err => console.log(err))
})

router.post("/editar/:id", (req, res, next) => {

    const { id } = req.params
    const { name, type } = req.body
    
    Place
        .findByIdAndUpdate(id, { name, type }, { new: true })
        .then(updatedPlace => res.redirect('/sitios'))
        .catch(err => console.log(err))
})

//Delete place
router.post("/eliminar/:id", (req, res, next) => {

    const { id } = req.params
    
    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/sitios'))
        .catch(err => console.log(err))
})

module.exports = router