const mongoose = require('mongoose')
const Place = require('../models/place')

const dbtitle = 'COFEEANDSHOPS'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

Place.collection.drop()

const places = [
    {
        name: 'El café caliente',
        type: 'coffee shop'
    },

    {
        name: 'Ojo no te quemes',
        type: 'coffee shop',
        
    },
    {
        name: 'Un cortadito',
        type: 'coffee shop',
        
    },
    {
        name: 'Me leo todo',
        type: 'bookstore'
    },
    {
        name: 'Aroma a libro viejo',
        type: 'bookstore'
    }, {
        name: 'La naranja mecánica',
        type: 'bookstore'
    }
    
]

Place.create(places, (err) => { if (err) { throw (err)}
    console.log(`Created ${places.length} places`)
    mongoose.connection.close();
});

