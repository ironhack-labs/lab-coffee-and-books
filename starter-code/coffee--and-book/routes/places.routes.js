const express = require('express');
const Place = require('../models/Place.model');
const router = require("express").Router()


router.get("/list", (req, res, next) => {
    Place
        .find()
        .then(places => {
            res.render("places/placeslist", { places })
        })
        .catch(err => console.log(err))
})

router.get("/create", (req, res, next) => {
    res.render("places/newplace")
})
router.post("/create", (req, res, next) => {
    const { name, type } = req.body


    Place
        .create({ name, type })
        .then(() => res.redirect("/list"))
        .catch(err => console.log(err))
})
router.get("/details/:_id", (req, res, next) => {
    const { _id } = req.params
    Place
        .findById(_id)
        .then(places => {
            res.render("places/placedetail", places)
        })
        .catch(err => console.log(err))
})
router.post("/details/:_id", (req, res, next) => {
    const { name, type } = req.body
    const { _id } = req.params


    Place
        .findByIdAndUpdate(req.params, { name, type })
        .then(() => res.redirect(`/list`))
        .catch(err => console.log(err))

})
router.post('/delete/:_id', (req, res) => {

    const { _id } = req.params

    Place
        .findByIdAndDelete(_id)
        .then(() => res.redirect('/list'))
        .catch(err => console.log(err))

})



module.exports = router;