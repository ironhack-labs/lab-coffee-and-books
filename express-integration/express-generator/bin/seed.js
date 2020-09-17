
const mongoose = require('mongoose');
const Coffee = require('../models/place.model');


mongoose.connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
const coffees = [{
    name: 'Coffee-bar',
    type: 'coffee shop'
},
{
    name: 'Coyote',
    type: 'coffee shop' 
}]



Coffee.create(coffees)
    .then(allCoffees => console.log('Se han creado', allCoffees.length, 'libros en la BBDD'))
    .catch(err => console.log('ERROR: ', err))
