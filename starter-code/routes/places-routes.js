const express = require('express');
const router = express.Router();

const Place = require('../models/Place.model')

//render places page
router.get("/places", (req, res, next) => {
    res.render("places/places-page")
})

// new place GET
router.get("/places/crear", (req, res, next) => {
    res.render("places/new-place")
})

// new place POST
router.post('/places/crear', (req, res) => {
    const { name, type } = req.body
    Place
        .create({ name, type })
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))
});

// new place GET (aquí tiene que buscar y renderizar lo que encuentre)
router.get('/places', (req, res) => {

    Place
        .find()
        .then(places => {
            console.log(places)
            res.render("places/places-page", { places }) //  convertir array en objeto
        })
        .catch(err => console.log(err))
});

//editar place
//GET
router.get('/places/:placeId/editar', (req, res) => {
    const { placeId } = req.params

    Place
        .findById(placeId)// aquí no lleva los 2 parametros
        .then(place => res.render('places/edit-place', place))// recibe 1 parámetro como mínimo y el 2ndo los datos que queramos pasarle a la vista (place, del then que viene de la base de datos)
        .catch(err => console.log(err))
})
//POST
router.post('/places/:placeId/editar', (req, res) => {
    const { placeId } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(placeId, { name, type })//  recibe 2 parametros
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))
})

// borrar place 

router.post('/places/:placeId/borrar', (req, res) => {
    const { placeId } = req.params
    // aquí no es igual porque al borrar se borraría todo
    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))
})


module.exports = router;