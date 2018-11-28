const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

router.post('/modify/save', (req,res,next)=>{
    //res.send(req.body)
    Place.updateOne({'_id':req.body.id},{'name':req.body.name,
                                         'tipo':req.body.tipo,
                                         'coordinates':[req.body.lat,req.body.lng]})
                                        .then(result =>{
                                            res.send(result)
                                            //res.redirect('/detail/'+req.body.id)
                                        })
})

router.get('/modify/:id', (req,res,next)=>{
    Place.findById(req.params.id)
    .then(place=>{
        //res.send(place.name)
        const lat = place.coordinates[0]
        const lng = place.coordinates[1]

        const placeOK = {
            id:place.id,
            name: place.name,
            tipo: place.tipo,
            lat:lat,
            lng:lng
        }
        res.render('places/modify',placeOK)
})
})

router.get('/detail/:id',(req,res,next)=>{
    //res.send(req.params.id)
    const id = req.params.id
    Place.findById(id)
    .then(place=>{
        //res.send(place.tipo)
        const lat = place.coordinates[0]
        const lng = place.coordinates[1]

        const placeOK = {
            id:place.id,
            name: place.name,
            tipo: place.tipo,
            lat:lat,
            lng:lng
        }
        res.render('places/detail',placeOK)
    })
})

router.get('/delete/:id', (req,res, next)=>{
    const id = req.params.id
    Place.deleteOne({'_id':id})
    .then(result=>{
        res.redirect('/places/list')
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