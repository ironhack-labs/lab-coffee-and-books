const mongoose = require('mongoose');
const Sitio = require('../models/position');
const { dbURL } = require('../config');
mongoose.connect( dbURL);

const sitios = [
    {
        name: 'La Central',
        lat: 40.407304,
        lng: -3.694664    
    },
    {
        name: 'Laie',
        lat: 40.411070,
        lng: -3.693076,
    },
]

Sitio.collection.drop();

sitios.forEach(p =>{
    let pr = new Sitio(p);
    pr.save((err,sit)=>{
        if(err){
            throw err;
        }
        console.log(`Sitio guardado ${sit.name}`);
    })
})

module.exports = sitios;