const express = require('express');
const router = express.Router();
const Place = require('../models/Place.model')






router.get("/lugares/listado", (req, res, next) => {

    Place
        .find()
        .then(places => res.render('place/list', { places }))
        .catch(err => next(err))
})
router.get("/lugares/crear", (req, res, next) => {
    res.render('place/create')
})
router.post('/lugares/crear', (req, res) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]

    }
    Place
        .create({ name, type, location })
        .then(() => res.redirect(`/lugares/listado`))
        .catch(err => console.log(err))
});
router.get("/lugares/editar/:id", (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(places => res.render('place/edit', { places }))
        .catch(err => next(err))
})
router.post("/lugares/editar/:id", (req, res, next) => {

    // const { character_id } = req.params
    const { name, type, latitude, longitude, id } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/lugares/listado'))
        .catch(err => next(err))
})
router.post("/eliminar/:places_id", (req, res) => {

    const { places_id } = req.params


    Place
        .findByIdAndDelete(places_id)
        .then(() => res.redirect('/lugares/listado'))
        .catch(err => console.log(err))

})
module.exports = router;