require('dotenv').config();

const mongoose = require("mongoose")
const Place = require('../models/Place')


// const places = [{
//         name: "Kaffehause",
//         type: "COFFESHOP",
        
//     },
//     {
//         name: "Bertrand",
//         type: "BOOKSHOP",
//     },
//     {
//         name: "Orgio",
//         type: "COFFESHOP",
//     }
// ]


// Call the Places model's create method with the array as argument
mongoose.connect(process.env.DB, {useNewUrlParser: true})
.then(() => { console.log(`Connected to mongoose`)
})

.then(() => { return Place.insertMany(places)
})

.then(place => { console.log(place)
 mongoose.connection.close()
 
})