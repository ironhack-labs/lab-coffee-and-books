const express = require('express')
const Place = require('../models/places.model')
const router = express.Router()

// Endpoints
//Listar Places
router.get('/', (req, res) => {
    
    Place.find({})
    .then(places=>res.render('places/index',{places}))
    .catch(err=>console.log('Error: ', err))
   })



//Create Places

router.get('/create',(req,res)=>res.render('places/create-places'))

router.post('/create',(req,res)=>{

    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }
    const newPlace={
        name:req.body.name,
        type:req.body.type,
        location
    }

    
   Place.create(newPlace)
   .then(()=>res.redirect('/places'))
   .catch(err=>console.log('Error: ', err))
})



//Remove Places

router.get('/remove/:id',(req,res)=>{
let id =req.params.id
Place.findByIdAndRemove(id)
.then(()=>res.redirect('/places'))
.catch(err=>console.log('Error: ', err))
})

module.exports = router


//edit places

router.get('/edit/:id',(req,res)=>{
    const id = req.params.id
     Place.findById(id)
    .then(place=>res.render('places/edit-places',place))
    .catch(err=>console.log('Error: ', err))
    
    })


router.post('/edit/:id',(req,res)=>{
const id = req.params.id

let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
}
const newPlace={
    name:req.body.name,
    type:req.body.type,
    location
}

Place.findByIdAndUpdate(id,newPlace)
.then(()=>{
   
    res.redirect('/places')})
.catch(err=>console.log('Error: ', err))

})