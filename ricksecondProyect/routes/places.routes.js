const express = require('express');
const router = express.Router();
const Place = require('../models/Place.model')

//list places
router.get("/list", (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => console.log(err))

})

//create places (render)
router.get('/crear', (req, res, next) => {
    res.render('places/crear')
})

//create places (handler)
router.post('/crear', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }



    Place
        .create({ name, type, location })
        .then(() => res.redirect('/list'))
        .catch(err => console.log(err))


})

//detalles de places

router.get('/detalles/:id', (req, res, next) => {
    const { id } = req.params


    Place
        .findById(id)
        .then(place => res.render('places/detalles', place))
        .catch(err => console.log(err))

})

//editar los places (render)
router.get('/edit/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render("places/edit", place))
        .catch(err => console.log(err))
})

// editar los placer (handler)
router.post('/edit/:id', (req, res, next) => {
    const { id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect(`/detalles/${id}`))
        .catch(err => console.log(err))
})

//borrar place
router.post('/delete/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/list'))
        .catch(err => console.log(err))
})

router.get('/locations', (req, res, next) => {
    res.render('places/places-maps')
})

module.exports = router;
