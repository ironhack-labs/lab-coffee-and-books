const express = require('express');
const router = express.Router();

const Place = require('../models/place.model')

router.get('/create', (req, res, next) => {
    res.render('places/create');
});


router.post('/create', (req, res, next) => {
    const { name, type } = req.body

    Place.create({ name, type })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})


router.get('/:id', (req, res, next) => {

    console.log("llama a la ruta correcta")
    Place.findById(req.params.id)
        .then(placeFromDB => res.render('places/profile', placeFromDB))
        .catch(err => next(err))
})

router.get('/:id/delete', (req, res, next) => {

    Place.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/:id/edit', (req, res, next) => {

    Place.findById(req.params.id)
        .then(placeFromDB => res.render('places/edit', placeFromDB))
        .catch(err => next(err))
})


router.post('/:id/edit', (req, res, next) => {
    const { name, type } = req.body

    Place.findByIdAndUpdate(req.params.id, { name, type })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

module.exports = router;
