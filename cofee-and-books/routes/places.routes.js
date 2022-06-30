const router = require("express").Router();

const { create, find } = require("./../models/Place.model");
const Place = require('./../models/Place.model')

//LIST

router.get('/list', (req, res) => {

    Place
        .find()
        .then(places => {
            res.render('place/list', { places })
        })
        .catch(err => console.log(err))
})

//CREATE

router.get('/create', (req, res) => res.render('place/new-place'))

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(places => res.redirect('list'))
        .catch(err => console.log(err))
})

//UPDATE

router.get('/:id/edit', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            res.render('place/edit', place)
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(places => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

router.post('/:id/delete', (req,res)=>{
    const { id } = req.params

    Place
    .findByIdAndDelete(id)
    .then(() => res.redirect(`/places/list`))
    .catch(err => console.log(err))
})

module.exports = router;