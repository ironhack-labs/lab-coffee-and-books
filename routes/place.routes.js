const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')


// LIST
router.get('/lugares', (req, res, next) => {

    Place
        .find()
        .sort({ name: 1 })
        .then(places => {

            res.render('places/place-list', {
                places
            })
        })
        .catch(err => console.log(err))
})


// CREATE
router.get('/crear', (req, res, next) => {
    res.render('places/place-new')
})


router.post('/crear', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/lugares'))
        .catch(err => next(err))
})


// EDIT
router.get('/editar/:id', (req, res, next) => {

    const id = req.params.id
    // console.log(req.params)
    Place
        .findById(id)
        .then(place => res.render('places/place-edit', place))
        .catch(err => console.log(err))

})


router.post('/editar/:id', (req, res, next) => {

    const id = req.params.id
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    //console.log(req.body)
    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/lugares'))
        .catch(err => next(err))
})


// DELETE
router.post('/borrar/:id', (req, res, next) => {

    const id = req.params.id

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/lugares'))
        .catch(err => next(err))
})




module.exports = router;