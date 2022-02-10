const router = require("express").Router();
const Place = require('./../models/Place.model')

router.get("/", (req, res, next) => {
    Place
        .find()
        .then(resp => {
            console.log(resp),
                res.render("./Pages/places", { resp })
        })
        .catch(err => console.log(err))
})

router.get("/create", (req, res, next) => {
    res.render('./Pages/create')
})

router.post("/create", (req, res, next) => {
    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

});


router.post("/:id/delete", (req, res, next) => {
    const { id } = req.params
    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})

router.get("/:id/edit", (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(found => res.render('./Pages/edit', found))
        .catch(err => next(err))

})

router.post("/:id/edit", (req, res, next) => {
    const { id } = req.params
    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => res.redirect('/places'))

})

router.get("/details/:id/", (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(found => res.render('./Pages/details', found))
        .catch(err => next(err))

});



module.exports = router;
