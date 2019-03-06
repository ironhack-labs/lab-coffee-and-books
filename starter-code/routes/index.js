/*jshint esversion: 6 */

const express = require('express');
const Router = express.Router();
const Place = require('../models/Place')


// Listado de celebrities
Router.get("/", (req, res, next) => {
    Place.find()
        .then(places => {
            res.render("index", { places, JSONplaces: JSON.stringify(places) })
        })
        .catch(err => next(err))
})

Router.get('/new', (req, res, next) => {
    res.render('new');
});
// Añadir una nueva celebrity
Router.post("/new", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    let location = {
        type: "Point",
        coordinates: [longitude, latitude]
    }

    const place = new Place({ name, type, location })

    place.save() //comando de mongoose para guardar en ddtt
        .then(place => res.redirect("/"))
        .catch(err => next(err))
})

//Borrar
Router.post("/:id/delete", (req, res, next) => {

    Place.findByIdAndRemove(req.params.id)
        .then(place => res.redirect("/"))
        .catch(err => next(err))
})

//Editar
Router.get("/:id/edit", (req, res, next) => {

    Place.findOne({ _id: req.params.id })
        .then(place => {
            console.log(place)

            res.render("edit", { place })
        })
        .catch(err => next(err))
})

//actualizar en BBDD
Router.post("/:id/edit", (req, res, next) => {
    console.log(req.body)
    const { name, type, latitude, longitude } = req.body
    let location = {
        type: "Point",
        coordinates: [longitude, latitude]
    }

    Place.update({ _id: req.params.id }, { $set: { name, type, location } })
        .then(place => res.redirect("/"))
        .catch(err => next(err))
})


module.exports = Router;