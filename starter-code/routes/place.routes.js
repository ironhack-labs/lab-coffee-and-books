const express = require("express");
const router = express.Router();

const Place = require("../models/place.model");

// Endpoints
router.get("/listado", (req, res) => {
    Place
        .find()
        .then(allPlaces => res.render("places/place", { allPlaces }))
        .catch((err) => console.log("Error en la BBDD", err));
});

router.get("/detalle/:Id", (req, res) => {
    Place
        .findById(req.params.Id)
        .then(thePlace => res.render("places/show", thePlace))
        .catch((err) => console.log("Error en la BBDD", err));
});

router.get('/crear', (req, res) => {
    res.render('places/new')
})

router.post('/crear', (req, res) => {

    const { name} = req.body

    Place
        .create({ name})
        .then(() => res.redirect('/places/listado'))
        .catch(err => console.log("Error en la BBDD", err))
})

router.post('/:Id/eliminar', (req, res) => {

    Place
        .findByIdAndRemove(req.params.Id)
        .then(() => res.redirect('/places/listado'))
        .catch(err => console.log("Error en la BBDD", err))

})

router.get('/api', (req, res, next) => {
    Place
        .find({})
        .then(allPlacesFromDB => res.json({ allPlacesFromDB }))
        .catch(err => next(err))
});

router.get('/api/:id', (req, res, next) => {

    let placeId = req.params.id

    Place
        .findById(placeId)
        .then(onePlaceFromDB => res.json({ onePlaceFromDB }))
        .catch(err => next(err))
})


router.get('/:Id/editar', (req, res) => {

    Place
        .findById(req.params.Id)
        .then(thePlace => res.render('places/edit', thePlace))
        .catch(err => console.log("Error en la BBDD", err))
})


router.post('/editar/:Id', (req, res) => {

    const { name} = req.body

    Place
        .findByIdAndUpdate(req.params.Id, { name}, { new: true })
        .then(() => res.redirect('/places/listado'))
        .catch(err => console.log("Error en la BBDD", err))
})



module.exports = router;
