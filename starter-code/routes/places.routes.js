const express = require('express');
const router = express.Router();
const Place = require('../models/place.model')


//Create a new place
router.get('/places/crear', (req, res, next) => {
    // res.send('hola soy crear')
    res.render('create-place')
})

router.post('/places/crear', (req, res, next) => {

    const { name, type } = req.body


    Place
        .create({ name, type })
        .then(place => {
            res.redirect('list')
        })
        .catch(err => console.log(err))
})

//Places List
router.get('/places/list', (req, res, next) => {
    //res.send('soy places')

    Place
        .find()
        // .select({ name: 1 })
        .then(places => {
            res.render('list', { places })
        })
        .catch(err => console.log(err))

})

//edit list
router.get('/places/editar/:place_id', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => {
            res.render('edit-place', place)
        })
        .catch(err => console.log(err))
})

router.post('/places/editar/:place_id', (req, res, next) => {

    const { name, type } = req.body
    const { place_id } = req.params

    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

router.post('/places/eliminar/:place_id', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})




module.exports = router;

