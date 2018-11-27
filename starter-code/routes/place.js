const express = require('express')
const router  = express.Router()
const Place   = require('../models/Place')

router.get('/list',(req,res,next)=>{
    Place.find()
        .then(places => {
            res.render('place/list',{places})
        })
        .catch(e=> next(e))
})
router.get('/create',(req,res,next)=>{
    res.render('place/create')
})

router.post('/create',(req,res,next)=>{
    const r = {
        name: req.body.name,
        location: {
            type: "Point",
            coordinates: [req.body.lng, req.body.lat]
        }
    };
    Place.create(r).
        then(rest => {
            res.redirect("/place/list" + rest._id);
        })
        .catch(e => next(e))

})

router.get("/detail/:id", (req, res) => {
    Place.findById(req.params.id).then(rest => {
        res.render("place/detail", rest);
    });
});

router.get('/delete/:id',(req,res,next)=>{
    console.log('borrando')
    Place.findByIdAndDelete(req.params.id)
        .then(place =>{
            res.redirect('/place/list')
        })
        .catch(e=>next(e))
})

router.get('/update/:id',(req,res,next)=>{
    const {id} = req.params
    console.log('update')
    Place.findById(id)
        .then(place =>{
            res.render('place/update',place)
            console.log(place)
        })
        .catch(e=> next(e))
})
router.post('/update/:id',(req,res,next)=>{
    const {id} = req.params
    const {name,lat,lng} = req.body;
    console.log('update lng'+lng)
    console.log('update lat'+lat)
    const obj = {
        name: name,
        location:{
            coordinates: [lng,lat]
        }
    }
    Place.findOneAndUpdate({$set:obj})
        .then(place =>{
            console.log('redirigir')
            res.redirect(`/place/detail/${place._id}`)
            console.log(place)
        })
        .catch(e=> next(e))
})

module.exports = router