const express = require('express');
const router = express.Router();


//mostrar
const Coffee = require('../models/place');

router.get('/coffee', (req, res, next) => {
    Coffee
        .find()
        .then(coffee => res.render('coffee/list', { coffee }))
        .catch(err => console.log(err))
});

//crear
router.get('/coffee/create', (req, res, next) => {
    res.render('coffee/new-coffee')
});

router.post('/coffee/create', (req, res, next) => {


    const { name, description, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Coffee
        .create({ name, description, lat, lng })
        .then(() => res.redirect('/coffee'))
        .catch(err => console.log(err))

});
//si es :id tiene que ser req.params
//si es con ? es req.query
//EDITAR
router.get('/coffee/:id/edit', (req, res, next) => {
    const { id } = req.params
    Coffee
        .findById(id)
        .then(coffee => res.render('coffee/update-form', coffee))
        .catch(err => console.log(err))
});

router.post('/coffee/:id/edit', (req, res, next) => {
    const { id } = req.params
    const { name, description, lat, lng } = req.body

    Coffee
        .findByIdAndUpdate(id, { name, description, lat, lng }, { new: true })
        .then(updatedcoffee => res.redirect(`/coffee${updatedcoffee._id}`))
        .catch(err => console.log(err))
});
//ELIMINAR
router.post('/coffee/:id/delete', (req, res, next) => {
    const { id } = req.params

    Coffee
        .findByIdAndDelete(id)
        .then(() => res.redirect('/coffee'))
        .catch(err => console.log(err))
});

module.exports = router;