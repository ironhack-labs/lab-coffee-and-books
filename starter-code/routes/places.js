const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

router.get('/list/:id',(req,res,next)=>{
    console.log(req.params)
    const {id} = req.params.id
    Place.findById(id)
    .then(place=>{
        res.render('places/detail',place)
    })
})

router.get('/list',(req,res,next)=>{
    Place.find()
    .then(places=>{
        res.render('places/list',{places})
    })

})

router.get('/new', (req, res, next) => {
  res.render('places/new');
});

router.post('/new', (req, res, next) => {
    const p = {
    //NOMBRE DE LOCAL
    name:req.body.name,
    //UBICACION
    coordinates:[req.body.lat,req.body.lng],
    //TIPO DE LOCAL
    tipo:req.body.tipo
}
    Place.create(p)
    .then(x=>{
        res.redirect('/places/list')
    })

})

module.exports = router;