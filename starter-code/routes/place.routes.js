const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

//LISTING

router.get('/place', (req, res, next) => {

    Place
        .find()
        .then(place => {
            res.render('place', { place })
        })
        .catch(err => console.log(err))


});

//CREATING 

router.get('/place/create', (req, res, next) => {

    res.render('create')
})


router.post('/place/create', (req, res, next) => {

    const { name, type, longitude, latitude } = req.body

    Place
        .create({ name, type, longitude, latitude })
        .then(newPlace => {
            res.redirect('/place')
        })
        .catch(err => console.log(err))
})

//EDITING ¡NO GUARDA LOS CAMBIOS!

router.get('/place/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            console.log(place)
            res.render('edit-form', place)
        })
        .catch(err => console.log(err))

});

router.post('/place/:id/edit', (req, res, next) => {

    const { id } = req.params
    const { name, type } = req.body

    Place

        .findByIdAndUpdate(id, { name, type })
        .then(newPlace => {
            res.redirect('/place')
        })
        .catch(err => console.log(err))
});


// DELETING 

router.post('/place/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/place')
        })
        .catch(err => console.log(err))
});

module.exports = router;

