const router = require("express").Router()

const Place = require('../models/Place.model')

router.get("/", (req, res,) => res.render("places/new-place"))

router.post("/crear", (req, res,) => {

    const { name } = req.body

    // const location = {
    //     type: 'Point',
    //     coordinates: [lat, lng]
    // }

    Place
        .create({ name })
        .then(() => res.redirect('/place/lista', /*{ name }*/))
        .catch(err => console.log(err))
})




router.get("/lista", (req, res, next) => res.render("places/places-list"))




module.exports = router
