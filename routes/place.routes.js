const express = require('express');
const router = express.Router();

const Place = require('./../models/place')

router.get("/listado", (req, res, next) => {

    Place
        .find()
        .then((places) => {
            res.render("places/list", { places })
        })
        .catch(err => next(err))
});

router.get("/crear", (req, res, next) => {
    res.render("places/create")
});

router.post("/crear", (req, res, next) => {

    const { name, description, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, description, location })
        // .then(response => res.redirect(`/detalles/${response.data.id}`))
        .then(() => res.redirect(`/listado`))
        .catch(err => next(err))
});

router.get("/detalles/:id", (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then((place) => {
            const { coordinates } = place.location;
            const latitude = coordinates[0];
            const longitude = coordinates[1];
            res.render('places/details', { place, latitude, longitude })

        })
        .catch(err => next(err))
})


module.exports = router