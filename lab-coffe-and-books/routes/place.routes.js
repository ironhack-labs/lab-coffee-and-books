const express = require('express');
const router = express.Router();

const Place = require('../models/Place.model')

router.get('/list',(req,res,next)=>{

    Place
    .find()
    .then(places=> res.render('list',{places}))
    .catch(err=> console.log(err))
})

//create

router.get('/create', (req, res, next) => {
    res.render('create')
});

router.post('/places/create-form', (req, res, next) => {
    const { name, businessClass, lat,lng} = req.body
    const location={
        type:'Point',
        coordinates:[lat,lng]
    }
    Place
        .create({ name, businessClass,location })
        .then(() => res.redirect('/list'))
        .catch(err => console.log(err))
});

//update

router.get('/places/:place_id/edit', (req, res, next) => {

    const { place_id } = req.params
    Place
        .findById(place_id)
        .then(place => {
            console.log(place)
            res.render('update', place)
        })
        .catch(err => console.log(err))
});

router.post('/places/:place_id/edit', (req, res, next) => {
   
    const { place_id } = req.params
    const { name, businessClass } = req.body
    console.log(req.body)
    Place
        .findByIdAndUpdate(place_id, { name, businessClass }, { new: true })

        .then(() => res.redirect(`/list`))
        .catch(err => console.log(err))
});

//Delete

router.post('/place/:place_id/delete', (req, res, next) => {
   
    const { place_id } = req.params
    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect(`/list`))
        .catch(err => console.log(err))
});

module.exports = router