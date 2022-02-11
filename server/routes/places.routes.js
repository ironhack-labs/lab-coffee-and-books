const router = require("express").Router()
const place = require('../models/place')


router.get("/create", (req, res, next) => {


    res.render("new-places")
})


router.post("/create", (req, res, next) => {


    const { name, type } = req.body

    place
        .create({ name, type })
        .then(place => res.redirect("/"))
        .catch(err => console.log(err))

})

router.get("/", (req, res, next) => {


    place

        .find()
        .then(placeList => res.render("list-places", { placeList }))
        .catch(err => console.log(err))

})

router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    place

        .findById(id)
        .then(place => res.render("edit-places", { place }))
        .catch(err => console.log(err))

})

router.post('/:id/edit', (req, res) => {
    const { id } = req.params
    const { name, type } = req.body

    place

        .findByIdAndUpdate(id, { name, type }, { new: true })
        .then(() => res.redirect('list-places'))
        .catch(err => console.log(err))


})

router.post('/:id/delete', (req, res) => {
    const { id } = req.params

    place

        .findOneAndDelete(id)
        .then(() => res.redirect("/"))
        .catch(err => console.log(err))
})






module.exports = router