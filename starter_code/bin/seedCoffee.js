require('dotenv').config();

const mongoose = require('mongoose');
const Restaurant = require('../models/Coffee');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Coffee.collection.drop();

Coffee.create([
    //{
        
        //}
    },
    //{
        
       // }
    }
])
.then( () => {
    console.log("Coffee created")
    mongoose.disconnect();
});