const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbtitle = 'coffeeAndBooks'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { userCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })

const place = [
    {
    
        name: 'Shambala',
        type: 'coffee shop'
    },
    {
        name: 'Gitbook',
        type: 'coffee shop'

    },
    {
        name: 'Picaporte Store',
        type: 'bookstore'
    },
]

mongoose.connection.collections['places'].drop()


Place
    .create(place)
    .then((coffeeAndBooks) => {
            console.log(`Created ${coffeeAndBooks.length} place`),
            mongoose.connection.close()
    })

    .catch((err) => 
       console.log('Ha habido un error', err))