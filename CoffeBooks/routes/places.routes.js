const express = require("express")
const router = express.Router()

const Place = require("../models/Place.model")

router.get('/lista', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => next(err))

})

router.get("/crear", (req, res, next) => {
    res.render("places/create",)
})

router.post('/crear', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))


})
module.exports = router 
