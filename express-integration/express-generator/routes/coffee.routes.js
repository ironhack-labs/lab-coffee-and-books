const express = require('express');
const router = express.Router();
const Places = require('../models/place.model');


//Crear
router.get('/crear', (req, res) => res.render('coffee/coffee-crear'))
router.post('/crear', (req, res) => {

    const { name, place, latitude, longitude } = req.body

    let location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Places.create({ name, place, location })
        .then(() => res.redirect('/coffee/listado'))
        .catch(err => console.log("ERRORR", err))

})

//Mostrar

router.get('/listado', (req, res) => {
    Places.find()
        .then(coffee => res.render('coffee/coffee-list', { coffee }))
        .catch(err => console.log('ERROR:', err))
})

router.get('/detalles/:id', (req, res) => {

    const id = req.params.id

    Places.findById(id)

        .then(thecoffee => res.render('coffee/coffee-details', thecoffee))
        .catch(err => console.log("ERRORR", err))
})
//Editar
router.get('/editar', (req, res) => {

    const id = req.query.id
    Places.findById(id)
        .then(coffees => res.render('coffee/coffee-edit', coffees))
        .catch(err => console.log("ERRORR", err))
})

router.post('/editar/:id', (req, res) => {

    const id = req.params.id
    const { name, place, longitude, latitude } = req.body

    Places.findByIdAndUpdate(id, { name, place, longitude, latitude })
        .then(() => res.redirect('/coffee/listado'))
        .catch(err => console.log("ERRORR", err))
})

// Eliminar

router.get('/eliminar', (req, res) => {
    const id = req.query.id
    Places.findByIdAndDelete(id)
        .then(() => res.redirect('/coffee/listado'))
        .catch(err => console.log("ERRORR", err))
})







module.exports = router