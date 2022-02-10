const router = require("express").Router();
const Place = require('../models/Place.model')

router.get('/crear', (req, res, next) =>{

 
    res.render('crud/crear-view')
})

router.post('/crear', (req, res, next) => {
    const {name, type, lat, lng} = req.body
    const location = {
        type: 'Point', 
        coordinates: [lat, lng]
    }
    Place
        .create({ name, type, location })
        .then(element => console.log(element))
        .then(res.redirect('/lugares'))
        .catch(err => console.log(err))


    
})

router.get('/lugares', (req,res,next) => {

    Place 
        .find()
        .then(places => res.render('crud/lugares-view', {places}))
        .catch(err => console.log(err))

})

router.get('/editar/:id', (req, res, next) => {
    
    const {id} = req.params
    
    Place 
        .findById(id)
        .then(place => res.render('crud/editar-view',  place ))
        .catch(err => console.log(err))

   
})

router.post('/editar/:id', (req, res, next) => {   

        const {name, type, lat, lng} = req.body
        
        const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
        const {id} = req.params  
 
   Place 
        .findByIdAndUpdate(id, { name, type, location }, {new:true})
        .then(updated => console.log(`updated ${updated}`))
        .then(res.redirect('/lugares'))
        .catch(err => console.log(err))

})

router.post('/editar/:id/delete', (req, res, next) => {

    const {id} = req.params

    Place 
        .findByIdAndDelete(id)
        .then(res.redirect('/lugares'))
        .catch(err => console.log(err))


})







module.exports = router;