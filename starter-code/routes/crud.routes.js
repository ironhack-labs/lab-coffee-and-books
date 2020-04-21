const express = require('express')
const router = express.Router()

const Coffe = require('../models/coffe.model')

router.get("/api", (req, res, next) => {
    Coffe.find()
        .then(coffes => {
            res.json(coffes);
        })
        .catch(error => console.log(error));
})


router.get('/edit/:id', (req, res, next) => {

    Coffe.findById(req.params.id)
        .then(theCoffeEdit => res.render('secondary/edit', theCoffeEdit))
        .catch(err => console.log(err))

})

router.post('/edit/:id', (req, res, next) => {
    let location = {
        type: "Point",
        coordinates: [req.body.lat, req.body.long]
    }
    Coffe.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            type: req.body.type,
            location
        }, {
            new: true
        })
        .then(res.redirect("/"))
        .catch(err => console.log("An error ocurred", err))
})





router.get('/create', (req, res) => res.render('secondary/create'))

router.post('/create', (req, res, next) => {
    let location = {
        type: "Point",
        coordinates: [req.body.lat, req.body.long]
    }
    Coffe.create({ name: req.body.name, type: req.body.type, location })

    .then(res.redirect("/"))
        .catch(err => console.log("No se pudo crear el local", err))
})





router.post('/delete/:id', (req, res, next) => {

    Coffe.findByIdAndRemove(req.params.id)
        .then(res.redirect("/"))
        .catch(err => console.log("An error ocurred", err))
})







router.get('/:id', (req, res, next) => {

    Coffe.findById(req.params.id)
        // .then(coffa => console.log(coffa))
        .then(theCoffe => res.render('secondary/detail', theCoffe))
        .catch(err => console.log('No se pudieron mostrar los detalles', err))

})


module.exports = router