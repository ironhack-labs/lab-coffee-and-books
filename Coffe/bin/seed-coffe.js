const mongoose = require('mongoose');
const Coffe = require('../models/Coffe');
mongoose.connect("mongodb://localhost/Coffe");

const coffe = [
    {
        name: "Cafe postureo",
        location:{lat:40.409534, lng: -3.699382},
        description: "Cafeteria muy bonita",
    },
    {
        name: "Cafe iron",
        location:{lat:40.40454, lng: -3.699342},
        description: "Cafeteria muy cara",
    },
    {
        name: "cafeteria lolo",
        location: {lat:40.44454, lng: -3.699442},
        description: "Cafeteria muy vieja",
    }
]; 

Coffe.collection.drop()

Coffe.create(coffe, (err, docs) => {
    if(err){
        throw err
    }
    docs.forEach((coffe)=>{
        console.log(coffe.name)
    } )
    mongoose.connection.close()
});