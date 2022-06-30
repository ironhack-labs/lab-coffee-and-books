const router = require("express").Router();

const Place = require('./../models/place.model')

//List places
router.get("/list", (req, res, next) => {

    Place
        .find()
        .then(coffe => {
            res.render('place/list', { coffe })
        })
        .catch(err => console.log(err))

})

//Create places
router.get("/create", (req, res, next) => res.render("place/create"))

router.post("/create", (req, res, next) => {

    const { name, type, description, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, description, location })
        .then(() => res.redirect('list'))
        .catch(err => console.log(err))
})


//Edit places
router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(coffe => res.render('place/edit', coffe))
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res, next) => {

    const { name, type, description, latitude, longitude } = req.body
    const { id } = req.params

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, description, location })
        .then(() => res.redirect('/place/list'))
        .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect(`/place/list`))
        .catch(err => console.log(err))
})



module.exports = router;