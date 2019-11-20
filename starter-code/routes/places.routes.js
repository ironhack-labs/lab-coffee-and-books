const express = require('express');
const router = express.Router();

const place = require('../models/place')


//--------- -----------
router.get('/', (req, res) => {

    place.find()
    .then(allPlaces =>{ res.render('places/index', {allPlaces})
})
    .catch(err => console.log("Error consultando la BBDD: ", err))
})

//-----create-------//
// router.get('/new',(req,res)=>{
//     res.render('places/new')
// })

// router.post('/',(req,res)=>{

// })

//Delete

// router.post('/id/delete',(req,res)=>{
//     Places
//     .findByIdAndDelete({_id:req.params.id})
//     .then(placeDeleted=>{
//         placeR
//     })
// })


module.exports = router;