const router = require("express").Router()
const Place = require('./../models/place.model')



router.get('/lugares', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/places', { places }))
        .catch(err => console.log(err))
})

router.get('/crear', (req, res, next) => {
    res.render('places/place-create')
})

router.post('/crear', (req, res, next)=>{

    const {name, type, lat, lng} = req.body

    const location ={
        type:'Point',
        coordinates:[lat, lng]
    }

    Place
    .create({name, type, location})
    .then(()=> res.redirect('/lugares'))
    .catch(err => res.redirect('/crear'))
})


router.get('/:id/editar', (req, res, next)=>{
    const {id} = req.params

    Place
    .findById(id)
    .then(place=> res.render('places/place-edit', place))
    .catch(err=> console.log(err))
})

router.post('/:id/editar', (req, res, next)=>{
    const {id} = req.params
    const {name, type, lat, lng} = req.body

    const location ={
        type:'Point',
        coordinates:[lat, lng]
    }

    Place
    .findByIdAndUpdate(id, {name, type, location})
    .then(udpatePlace => res.redirect('/lugares'))
    .catch(err => console.log(err))
})


router.post('/:id/eliminar', (req, res, next) =>{

    const {id} = req.params

    Place
    .findByIdAndDelete(id)
    .then(()=>res.redirect('/lugares'))
    .catch(err =>console.log(err))
})

router.get('/mapas', (req, res, next)=>{
    res.render('places/maps')
})

module.exports = router