const Place = require("../models/Place.model");

const router = require("express").Router();

//Places route
router.get('/sitios', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/places', { places }))
        .catch(err => console.log(err))


})


//New-place route

router.get('/crear-sitio', (req, res, next) => {
    res.render('places/new-place')
})

router.post('/crear-sitio', (req, res, next) => {

    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/sitios'))
        .catch(err => console.log(err))


})


//Edit place route

//GET

router.get('/sitios/:_id/editar', (req, res, next) => {

    const { _id } = req.params

    Place
        .findById(_id)
        .then(place => res.render('places/update-form', place))
        .catch(err => console.log(err))
})

//POST

router.post('/sitios/:_id/editar', (req, res, next) => {

    const { _id } = req.params

    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .findByIdAndUpdate(_id, { name, type, location })
        .then(updatedPlace => res.redirect('/sitios'))
        .catch(err => console.log(err))
})



//Delete

router.post('/sitios/:_id/eliminar', (req, res) => {

    const { _id } = req.params

    Place
        .findByIdAndDelete(_id)
        .then(() => res.redirect('/sitios'))
        .catch(err => console.log(err))
})





module.exports = router;