'use strict';

const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page. */
router.get('/',(req,res,next)=>{
    res.render('home');
});

router.post('/add',(req,res,next)=>{
    const placeInfo = {
        kind: req.body.kind,
        address: req.body.address
    };
    const newPlace = new Place(placeInfo);

    newPlace.save((err)=>{
        //if error show form again
        if (err){
            next(err);
        } else {
            res.redirect('/places');
        }
    }); 
});




module.exports = router;