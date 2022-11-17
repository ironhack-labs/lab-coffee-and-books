const express = require('express');
const router = express.Router();

const Site = require('../models/sites.model')

router.get('/', (req, res) => {

    Site
        .find()
        .then(sites => res.render('sites/list', { sites })
        )
        .catch(err => console.log(err))
})

router.get('/crear', (req, res) => {

    res.render('sites/create')
})

router.post('/crear', (req, res) => {

    const { name, type, latitud, longitud } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitud, longitud]
    }

    Site
        .create({ name, type, location })
        .then(() => {
            res.redirect('/listado')
        })
        .catch(err => console.log(err))
})

router.get('/:id/editar', (req, res) => {

    const { id: site_id } = req.params

    Site
        .findById(site_id)
        .then(site => {
            res.render('sites/edit', { site })
        })
        .catch(err => console.log(err))
})

router.post('/:id/editar', (req, res) => {

    const { id: site_id } = req.params
    const { name, type, latitud, longitud } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitud, longitud]
    }

    Site
        .findByIdAndUpdate(site_id, { name, type, location })
        .then(() => {
            res.redirect('/listado')
        })
        .catch(err => console.log(err))
})

router.post('/:id/eliminar', (req, res) => {

    const { id: site_id } = req.params

    Site
        .findByIdAndDelete(site_id)
        .then(() => {
            res.redirect('/listado')
        })
        .catch(err => console.log(err))
})

module.exports = router;
