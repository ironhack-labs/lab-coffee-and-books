const router = require("express").Router();
const Place = require('./../models/Place.model')

//CREAR PLACES
router.get("/create", (req, res) => {
    res.render("places/new-place");
});

router.post("/create", (req, res) => {

    const { name, type, lat, lng } = req.body
    const location = {
        type: "point",
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => {
            res.redirect("/places")
        })
        .catch(err => console.log(err))
})

//LISTA DE PLACES
router.get("/", (req, res) => {

    Place
        .find()
        .then(newPlaces => {
            res.render("places/places", { newPlaces })
        })
        .catch(err => console.log(err))
})

//EDITAR PLACES
router.get("/:id/edit", (req, res) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(newPlaces => {
            res.render(`places/edit-place`, newPlaces)
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
    const { id } = req.params
    const { name, type, lat, lng } = req.body
    const location = {
        type: "point",
        coordinates: [lat, lng]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => {
            res.redirect(`/places`)
        })
        .catch(err => console.log(err))
})

//BORRAR PLACES
router.post('/:id/delete', (req, res) => {
    const { id } = req.params

    Place
        .findByIdAndRemove(id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})


module.exports = router;