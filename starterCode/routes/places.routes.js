const router = require("express").Router();

const Place = require("./../models/Place.model")


router.get('/', (req, res) => {

    Place
        .find()
        .then(places => {
            res.render('places/places-list.hbs', { places })
        })
        .catch(err => console.log(err))
})

router.get('/create', (req, res) => {

    Place
        .find()
        .then(newPlace => res.render('places/new-place', { newPlace }))
        .catch(() =>
            console.log(err)
        )
})

router.post('/create', (req, res) => {

    const { name, type, longitude, latitude
    } = req.body

    const location = {
        type: "Point",
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => {
            res.redirect(`/places`)

        })
        .catch(() =>
            console.log(err)
        )
})

router.get('/:id', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(detPlace => {
            res.render('places/place-details', detPlace)
        })
        .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(editPlace => {
            res.render("places/edit-place", editPlace)
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
    const { id } = req.params
    const { name, type, longitude, latitude } = req.body

    const location = {
        type: "Point",
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location }, { new: true })
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))
})

module.exports = router;