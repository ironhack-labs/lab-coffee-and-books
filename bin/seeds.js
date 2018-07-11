require ("dotenv").config();

const mongoose = require ("mongoose");
const Place = require ("../models/Place");



const dburl = process.env.DBURL;
mongoose.connect(`mongodb://localhost/${process.env.DBURL}`).then(() => console.log(`Connected to db: ${dburl}`));


 Place.collection.drop();

 Place.create ([
    {
        name: "El Candil",
        type: "Book Store",
        location:{
            type: "Point",
            coordinates:[40.427232,-3.677141]
        }
    },
    {
        name: "Miraguano",
        type: "Book Store",
        location:{
            type: "Point",
            coordinates:[40.425901, -3.671852]
        }
        
    },
    {
    name: "Starbucks",
        type: "Coffee Shop",
        location:{
            type: "Point",
            coordinates:[40.426285, -3.675392]
        }
    },
    {
        name: "Soña",
        type: "Coffee Shop",
        location:{
            type: "Point",
            coordinates:[40.429984, -3.678064]
        }
    }
])
.then( () => {
    console.log("Places have been created")
    mongoose.disconnect();
});