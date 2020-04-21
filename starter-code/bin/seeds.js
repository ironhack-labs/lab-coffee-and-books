const mongoose = require('mongoose');
const Coffe = require('../models/coffe.model');

const dbName = 'coffe-shops';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });




const coffes = [{
        name: 'Mision Cafe',
        type: 'coffee shop',
        location: {
            type: 'Point',
            coordinates: [40.424483, -3.708708]
        }
    },
    {
        name: 'Cafe Angelica',
        type: 'coffee shop',
        location: {
            type: 'Point',
            coordinates: [40.423444, -3.706952]

        }
    }
]

Coffe.create(coffes)
    .then(allCoffes => {
        console.log(`${allCoffes.length} coffes created!`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred: ${err}`))